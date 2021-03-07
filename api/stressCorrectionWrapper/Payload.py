from typing import List, Union
from pydantic import BaseModel, validator
from pydantic.networks import validate_email
from fatigue.modFactors import ModificationFactors
from fatigue.fatigue import FatigueTheory
import re


class NeuberPayload(BaseModel):
      unitSystem:str
      youngsModulus:float
      yieldStrength:float
      osgoodExponent:float
      linearStress: float
      totalElongation:float


      @validator("unitSystem")
      def val_unit_system(cls,unit):
        if unit not in ["ksi","MPa"]:
            raise ValueError("Incorrect unit system provided")
        return unit

      @validator("youngsModulus")
      def val_youngs_modulus(cls,value):
        if value > 40000 or value< 16000:
            raise ValueError("Young's modulus outside applicable range: 16000 - 40000 ksi")
        return value

      @validator("yieldStrength")
      def val_yield_strength(cls,value):
        if value > 220 or value< 10:
            raise ValueError("Yield strength outside applicable range: 10 - 20 ksi")
        return value

      @validator("osgoodExponent")
      def val_osgood_exponent(cls,value):
        if value > 30 or value< 10:
            raise ValueError("Osgood exponenent outside applicable range: 10 - 30")
        return value

      @validator("linearStress")
      def val_linear_stress(cls,value,values):
        if values["yieldStrength"]:
          if value < values["yieldStrength"]:
            raise ValueError("Provided stress value is in linear elastic range")
          if value > 4*values["yieldStrength"]:
            raise ValueError(f"Provided stress value is greater than {4*values['yieldStrength']}")
        return value

      @validator("totalElongation")
      def val_total_elongation(cls,value):
        if value < 0:
          raise ValueError("Total elongation should be greater than 0")
        if value >1:
          raise ValueError("Total elongation should be less than 1")
        return value
