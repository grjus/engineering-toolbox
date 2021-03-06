from fatigue.fatigue import FatigueTheory, FatigueStress
from fatigue.fatiguelife import BaskinModel
from fatigue.modFactors import ModificationFactors


class FatigueWebWrapper:
    def __init__(self, payload, excel_data):
        self.excel_data = excel_data
        self.payload = payload.dict()
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

        self.stress_data = self.payload["stressData"]

    def get_mod_factor(self):
        mod_factor = 1
        if self.if_surf_factor:
            mod_factor = mod_factor * ModificationFactors.surface_factor(
                self.surf_factor_value, self.stress_data["ultimateStrength"]
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

    def fatigue(self):
        modification_factor = self.get_mod_factor()
        fatigue = FatigueStress(
            self.stress_data["minStress"],
            self.stress_data["maxStress"],
            self.stress_data["ultimateStrength"],
            FatigueTheory[self.stress_data["fatigueTheory"]],
            self.stress_data["yieldStrength"],
        )
        alt_stress = fatigue.alternating_stress
        mean_stress = fatigue.mean_stress
        fatigue_stress = fatigue.fatigue_stress()()
        baskin = BaskinModel(
            fatigue_stress, self.stress_data["ultimateStrength"], modification_factor
        )
        # allowable_cycles = baskin.get_allowable_cycles()
        damage = baskin.get_damage(self.stress_data["requiredCycles"])
        c_der, s_der = baskin.get_chart_data(True)
        c_raw, s_raw = baskin.get_chart_data(False)

        def process_data_to_excel():
            excel_data = []
            for (
                _min_stress,
                _max_stress,
                _alt_stress,
                _mean_stress,
                _fatigue_stress,
                _all_cycles,
                _damage,
            ) in zip(
                self.stress_data["minStress"],
                self.stress_data["maxStress"],
                alt_stress,
                mean_stress,
                fatigue_stress,
                self.stress_data["requiredCycles"],
                damage,
            ):
                data = list(
                    map(
                        lambda x: round(x, 3),
                        [
                            _min_stress,
                            _max_stress,
                            _alt_stress,
                            _mean_stress,
                            _fatigue_stress,
                            _all_cycles,
                            _damage,
                        ],
                    )
                )
                excel_data.append(data)
            return excel_data

        if self.excel_data:
            return {
                "excelData": process_data_to_excel(),
                "chartData": {
                    "derated": {"cycles": list(c_der), "stress": list(s_der)},
                    "raw": {"cycles": list(c_raw), "stress": list(s_raw)},
                },
                "summary":{
                "totalDamage":sum(damage),
                "modificationFactor":modification_factor
            }
            }

        return {
            "alternatingStress": alt_stress,
            "meanStress": mean_stress,
            "fatigueStress": fatigue_stress,
            "allowableCycles": self.stress_data["requiredCycles"],
            "damage": damage,
            "chartData": {
                "derated": {"cycles": list(c_der), "stress": list(s_der)},
                "raw": {"cycles": list(c_raw), "stress": list(s_raw)},
            },

        }
