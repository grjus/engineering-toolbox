from enum import Enum
from fat_log import fatigue_logging


class Stress:
    def __init__(self, min_stress: float, max_stress: float):
        self.min_stress = min_stress
        self.max_stress = max_stress

    def alternating_stress(self) -> float:
        return 0.5 * (self.max_stress - self.min_stress)

    def mean_stress(self) -> float:
        return 0.5 * (self.min_stress + self.max_stress)


class FatigueModel(Enum):
    GOODMAN = 1
    GERBER = 2
    SODERBERG = 3


class Fatigue(Stress):
    def __init__(
        self,
        min_stress: float,
        max_stress,
        mat_constant: float,
        stress_model: FatigueModel,
    ):
        super().__init__(min_stress, max_stress)
        self.mat_constant = mat_constant
        try:
            self.stress_model = stress_model
        except KeyError:
            fatigue_logging.error("Incorrect fatigue model selected")
        self.alt_stress = self.alternating_stress()
        self.mean_stress = self.mean_stress()

    def __goodman_stress(self) -> float:
        return self.alt_stress / (1 - self.mean_stress / self.mat_constant)

    def __gerber_stress(self) -> float:
        return self.alt_stress / (1 - (self.mean_stress / self.mat_constant) ** 2)

    def __soderberg_stress(self) -> float:
        return self.alt_stress / (1 - self.mean_stress / self.mat_constant)

    def get_fatigue_stress(self) -> float:
        models = {
            FatigueModel.GOODMAN: self.__goodman_stress(),
            FatigueModel.GERBER: self.__gerber_stress(),
            FatigueModel.SODERBERG: self.__soderberg_stress(),
        }
        return models[self.stress_model]


if __name__ == "__main__":
    test = Fatigue(-23, 45, 155, FatigueModel.GOODMAN)
    test.get_fatigue_stress()
