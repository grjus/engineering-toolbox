from typing import List, Union
from pydantic import BaseModel, validator
from pydantic.networks import validate_email
from fatigue.modFactors import ModificationFactors
from fatigue.fatigue import FatigueTheory
import re


class ModificationFactor(BaseModel):
    isrequired: bool
    value: str


class UserModificationFactor(ModificationFactor):
    value: Union[float,None]


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
        match = re.compile(r"[+]?[5-9]{1}[0-9]{1}[.]?([0-9]+)?%")
        matched_factor = re.search(match, rel_factor)
        if values["isrequired"]:
            if not matched_factor:
                raise ValueError("Incorrect reliability factor value")
        return rel_factor


class UserFactor(UserModificationFactor):
    @validator("value")
    def check_user_tag(cls, user_value, values):
        if values["isrequired"]:
            if user_value < 0.001 or user_value > 10:
                raise ValueError("User value should be within 0.001 - 10 range")
        return user_value


class StressData(BaseModel):
    ultimateStrength: float
    yieldStrength: Union[float,None]=10
    minStress: List[float] = []
    maxStress: List[float] = []
    requiredCycles: List[int] = None
    fatigueTheory: str

    @validator("minStress")
    def validate_stress(cls, min_stress, values):
        if "maxStress" in values:
            if len(values["maxStress"]) != len(min_stress):
                raise ValueError("Incorrect format of the input data")
        return min_stress

    @validator("maxStress")
    def validate_max_stress(cls, max_stress, values):
        if "minStress" in values:
            for stress1, stress2 in zip(values["minStress"], max_stress):
                if stress1 >= stress2:
                    raise ValueError(
                        "Maximum stress should be higher than the minimum one"
                    )
                if "ultimateStrength" in values:
                    if stress2 > values["ultimateStrength"]:
                        raise ValueError(
                            "Maximum stress should be less than ultimate strength"
                        )
        return max_stress

    @validator("requiredCycles")
    def validate_cycles(cls, req_cycles, values):
        if (
            "minStress" in values
            and len(values["minStress"]) != len(req_cycles)
            or len(values["maxStress"]) != len(req_cycles)
        ):
            raise ValueError("Incorrect format of the input data")
        return req_cycles

    @validator("ultimateStrength")
    def validate_ult_strength(cls, ult_strength, values):
        if ult_strength <= 0:
            raise ValueError("Ultimate strength should be greater than 0")
        return ult_strength

    @validator("yieldStrength")
    def validate_yield_strength(cls, yield_strength, values):
        if "ultimateStrength" in values:
            if isinstance(yield_strength,float) and yield_strength > values["ultimateStrength"]:
                raise ValueError("Yield strength greater than ultimate strength")
            if isinstance(yield_strength,float) and yield_strength <=0:
                print(yield_strength)
                raise ValueError("Yield strenght should be greater than zero")
        return yield_strength

    @validator("fatigueTheory")
    def validate_fatigue_theory(cls, theory):
        valid_keys = FatigueTheory.__members__.keys()
        if theory not in valid_keys:
            raise ValueError(
                f"Invalid model selected. Please use {','.join(valid_keys)}"
            )
        return theory


class FatiguePayload(BaseModel):

    surfaceFactor: SurfaceFactor
    loadFactor: LoadFactor
    reliabilityFactor: RelFactor
    userDefinedFactor: UserFactor
    stressData: StressData
