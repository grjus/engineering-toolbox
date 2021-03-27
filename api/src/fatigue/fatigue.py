from enum import Enum
from typing import List


class FatigueTheory(Enum):
    GOODMAN = 1
    GERBER = 2
    SODERBERG = 3


class FatigueStress(object):
    def __init__(
        self,
        min_stress: List[float],
        max_stress: List[float],
        mat_constant: float,
        fatigue_model: FatigueTheory,
        yield_strength:float=1
    ):
        self.min_stress = min_stress
        self.max_stress = max_stress
        self.mat_constant = mat_constant
        self.fatigue_model = fatigue_model
        self.alternating_stress, self.mean_stress = self.get_stress_components()
        self.yield_strength = yield_strength

    def get_stress_components(self):
        '''
        Calculates alternating and mean stresses based on provided min and max values
        @return: tuple[List]
        '''
        alt_stress = []
        mean_stress = []
        for s_min, s_max in zip(self.min_stress, self.max_stress):
            if s_min > s_max or s_max > self.mat_constant:
                raise ValueError("Incorrect input data")
            else:
                alt_stress.append(0.5 * (s_max - s_min))
                mean_stress.append(0.5 * (s_max + s_min))
        return alt_stress, mean_stress

    def __goodman_stress(self):
        '''
        Calculates Goodman stress
        @return: tuple(float)
        '''
        return tuple(
            map(
                lambda s_alt, s_mean: s_alt / (1 - s_mean / self.mat_constant),
                self.alternating_stress,
                self.mean_stress,
            )
        )

    def __gerber_stress(self):
        '''
        Calculates Gerber stress
        @return: tuple(float)
        '''
        return tuple(
            map(
                lambda s_alt, s_mean: s_alt / (1 - (s_mean / self.mat_constant) ** 2),
                self.alternating_stress,
                self.mean_stress,
            )
        )

    def __soderberg_stress(self):
        '''
        Calculates Soderberg stress
        @return: tuple(float)
        '''
        return tuple(
            map(
                lambda s_alt, s_mean: s_alt / (1 - s_mean / self.yield_strength),
                self.alternating_stress,
                self.mean_stress,
            )
        )

    def fatigue_stress(self):
        '''
        Rough switch implementation for implemented fatigue models
        '''
        fatigue_models = {
            FatigueTheory.GOODMAN: self.__goodman_stress,
            FatigueTheory.GERBER: self.__gerber_stress,
            FatigueTheory.SODERBERG: self.__soderberg_stress,
        }
        return fatigue_models[self.fatigue_model]


