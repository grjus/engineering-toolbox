from typing import List
import numpy as np


class BaskinModel(object):

    NO_OF_CHART_POINTS = 200

    def __init__(
        self,
        faitgue_stress: List[float],
        ult_strength: float,
        modification_factor: float,
    ):
        self.fatigue_stress = faitgue_stress
        self.ult_strength = ult_strength
        self.modification_factor = modification_factor

    def get_baskin_params(self, derated=True):
        if derated == False:
            self.modification_factor = 1
        self.endurance_limit = 0.4 * self.ult_strength * self.modification_factor

        def s_1000_factor():
            if self.ult_strength < 130:
                return (
                    -1.4218548015713e-07 * self.ult_strength ** 3
                    + 0.0000563482426806003 * self.ult_strength ** 2
                    - 0.00832826468826188 * self.ult_strength
                    + 1.25431693640081
                )
            return (
                -3.30944038409e-09 * self.ult_strength ** 3
                + 3.31244407581022e-06 * self.ult_strength ** 2
                - 0.00134990048235594 * self.ult_strength
                + 0.936702621709383
            )

        self.B_factor = (
            -1
            / 3
            * np.log10(
                s_1000_factor()
                * self.modification_factor
                * self.ult_strength
                / self.endurance_limit
            )
        )
        self.C_factor = np.log10(
            (self.modification_factor * s_1000_factor() * self.ult_strength) ** 2
            / self.endurance_limit
        )

    def get_allowable_cycles(self):
        self.get_baskin_params()
        allowable_cycles = []
        for stress in self.fatigue_stress:
            if stress <= self.endurance_limit:
                allowable_cycles.append(10 ** 12)
            else:
                allowable_cycles.append(
                    10 ** (-self.C_factor / self.B_factor)
                    * stress ** (1 / self.B_factor)
                )
        return allowable_cycles

    def get_damage(self, required_cycles: List[float]):
        damage = []
        allowable_cycles = self.get_allowable_cycles()
        for req_cycles, allow_cycle in zip(required_cycles, allowable_cycles):
            damage.append(round(req_cycles / allow_cycle, 3))
        return damage

    def get_chart_data(self, derated):
        self.get_baskin_params(derated)
        print(f"Modification factor {self.modification_factor}")
        cycle_range = np.linspace(
            1000, 1_000_000, num=self.NO_OF_CHART_POINTS, endpoint=True
        )
        stress = [10 ** self.C_factor * item ** self.B_factor for item in cycle_range]
        return cycle_range, stress
