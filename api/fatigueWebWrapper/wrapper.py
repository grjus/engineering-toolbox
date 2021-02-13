from fatigue.fatigue import FatigueTheory, FatigueStress
from fatigue.fatiguelife import BaskinModel
from fatigue.modFactors import ModificationFactors

# from ..fatiguelife import BaskinModel


class FatigueWebWrapper:
    def __init__(self, payload):
        self.payload = payload.dict()
        self.ult_strength = self.payload["ultimateStrength"]
        self.if_surf_factor, self.surf_factor_value = self.payload[
            "surfaceFactor"
        ].values()
        self.if_load_factor, self.load_factor_value = self.payload[
            "loadFactor"
        ].values()
        self.if_rel_factor, self.rel_factor_value = self.payload[
            "reliabilityFactor"
        ].values()
        self.if_user_factor, self.user_factor_value = self.payload[
            "userDefinedFactor"
        ].values()

    def get_mod_factor(self):
        mod_factor = 1
        if self.if_surf_factor:
            mod_factor = mod_factor * ModificationFactors.surface_factor(
                self.surf_factor_value, self.ult_strength
            )
        if self.if_load_factor:
            mod_factor = mod_factor * ModificationFactors.load_factor(
                self.load_factor_value
            )
        if self.if_rel_factor:
            mod_factor = mod_factor * ModificationFactors.reliability_factor(
                float(self.rel_factor_value.split("%")[0])
            )
        if self.if_user_factor:
            mod_factor = mod_factor * self.user_factor_value
        return mod_factor
