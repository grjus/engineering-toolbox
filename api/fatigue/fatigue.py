from enum import Enum
class Stress:
    def __init__(self, min_stress:float, max_stress:float):
        self.min_stress = min_stress
        self.max_stress = max_stress

    def alternating_stress(self)->float:
        return 0.5*(self.max_stress - self.min_stress)

    def mean_stress(self)->float:
        return 0.5*(self.min_stress + self.max_stress)



class Fatigue(Stress):
    def __init__(self, min_stress:float, max_stress, mat_constant):
        super().__init__(min_stress, max_stress)
        self.mat_constant = mat_constant
        self.stress_model = stress_model