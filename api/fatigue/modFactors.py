from scipy.stats import norm


class ModificationFactors:

    STANDARD_DEVIATION = 0.08

    SURFACE_FACTOR = {}

    @staticmethod
    def reliability_factor(prob: float) -> float:
        return 1 - norm.ppf(
            prob / 100, loc=0, scale=ModificationFactors.STANDARD_DEVIATION
        )

    @staticmethod
    def surface_factor(surface_finish: str) -> float:
        return ModificationFactors.SURFACE_FACTOR[surface_finish]


if __name__ == "__main__":
    mod = ModificationFactors.reliability_factor(95)
    print(mod)
