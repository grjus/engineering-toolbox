from typing import Sequence
from pydantic import BaseModel


class ModificationFactor(BaseModel):
    isrequired: bool
    value: str


class FatiguePayload(BaseModel):
    ultimateStrength: float
    surfaceFactor: ModificationFactor
    loadFactor: ModificationFactor
    reliabilityFactor: ModificationFactor
    userDefinedFactor: ModificationFactor
    stressData: Sequence
