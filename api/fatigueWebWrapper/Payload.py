from typing import List, Union
from pydantic import BaseModel, validator
from pydantic.networks import validate_email
from fatigue.modFactors import ModificationFactors
import re


class ModificationFactor(BaseModel):
    isrequired: bool
    value: Union[str, float]


class SurfaceFactor(ModificationFactor):
    @validator("value")
    def check_surface_tag(cls, surf, values):
        if values["isrequired"]:
            if surf not in ModificationFactors.SURFACE_FACTOR.keys():
                raise ValueError("Incorrect surface finish factor")
        return surf


class LoadFactor(ModificationFactor):
    @validator("value")
    def check_load_tag(cls, load_type, values):
        load_keys = ModificationFactors.LOAD_FACTOR.keys()
        if values["isrequired"]:
            if load_type not in load_keys:
                raise ValueError(
                    f"Incorrect load type. Please use {','.join(load_keys)}"
                )
        return load_type


class RelFactor(ModificationFactor):
    @validator("value")
    def check_rel_tag(cls, rel_factor, values):
        match = re.compile(r"[+]?[5-9]{2}[.]?([0-9]+)?%")
        matched_factor = re.search(match, rel_factor)
        if values["isrequired"]:
            if not matched_factor:
                raise ValueError("Incorrect reliability factor value")
        return rel_factor


class UserFactor(ModificationFactor):
    @validator("value")
    def check_user_tag(cls, user_value, values):
        if values["isrequired"]:
            if float(user_value) < 0.001 and float(user_value) > 10:
                raise ValueError("User value should be within 0.001 - 10 range")
        return user_value


class StressData(BaseModel):
    ultimateStrength: float
    yieldStrength: float
    minStress: List[float] = []
    maxStress: List[float] = []
    requiredCycles: List[int] = None

    @validator("minStress")
    def validate_stress(cls, min_stress, values):
        if "maxStress" in values:
            if len(values["maxStress"]) != len(min_stress):
                raise ValueError("Incorrect format of the input data")
        return min_stress

    @validator("minStress")
    def validate_stress_values(cls, min_stress, values):
        print(values)
        if "maxStress" in values:
            print("HELLO")
            for stress1, stress2 in zip(min_stress, values["maxStress"]):
                print(stress1)
                if stress1 >= stress2:
                    raise ValueError("Minimum stress is greater than maximum one")
        return min_stress

    @validator("requiredCycles")
    def validate_cycles(cls, req_cycles, values):
        if "minStress" in values and len(values["minStress"]) != len(req_cycles):
            raise ValueError("Incorrect format of the input data")
        return req_cycles

    @validator("ultimateStrength")
    def validate_ult_strength(cls, ult_strength, values):
        if ult_strength <= 0:
            raise ValueError("Ultimate strength should be greater than 0")
        if "maxStress" in values:
            for each in values["maxStress"]:
                if each > ult_strength:
                    raise ValueError("Ultimate strenght lower than maximum stress")
        return ult_strength

    @validator("yieldStrength")
    def validate_yield_strength(cls, yield_strength, values):
        if "ultimateStrength" in values:
            if yield_strength > values["ultimateStrength"]:
                raise ValueError("Yield strength greater than ultimate strength")
        return yield_strength


class FatiguePayload(BaseModel):

    surfaceFactor: SurfaceFactor
    loadFactor: LoadFactor
    reliabilityFactor: RelFactor
    userDefinedFactor: UserFactor
    stressData: StressData
