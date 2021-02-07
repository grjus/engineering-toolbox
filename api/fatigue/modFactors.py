from scipy.stats import norm


class ModificationFactors:

    STANDARD_DEVIATION = 0.08

    SURFACE_FACTOR = {}

    LOAD_FACTOR = {}

    @staticmethod
    def reliability_factor(prob: float) -> float:
        return 1 - norm.ppf(
            prob / 100, loc=0, scale=ModificationFactors.STANDARD_DEVIATION
        )

    @staticmethod
    def surface_factor(surface_finish: str) -> float:
        return ModificationFactors.SURFACE_FACTOR[surface_finish]


def get_modification_factor(*args):
    load_factor, surface_factor, rel_factor = args
    if load_factor:
        pass
