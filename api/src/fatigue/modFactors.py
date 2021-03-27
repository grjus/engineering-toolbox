from scipy.stats import norm


class ModificationFactors:

    '''
    Assumed standard deviation for relibility factor evaluation
    '''

    STANDARD_DEVIATION = 0.08

    '''
    Surface factor utilized equation ax**5 + bx**4 + cx**3 + dx**2 + ex
    '''
    SURFACE_FACTOR = {
        "RHR1": [-1.9781e-10, 9.3052e-08, -1.54162e-05, 0.000992486, 0.978754496],
        "RHR2": [-2.41664e-10, 1.13e-07, -1.8961e-05, 0.001197649, 0.974180822],
        "RHR4": [-5.66e-11, 6.42711e-09, 1.65e-07, -6.21739e-05, 0.993976607],
        "RHR8": [-9.26e-11, 6.87e-09, 2.03e-06, -0.000443363, 1.011989161],
        "RHR16": [2.55e-12, -4.52e-08, 8.68e-06, -0.000785533, 1.018570076],
        "RHR32": [1.79e-10, -1.19e-07, 1.57404e-05, -0.001125283, 1.018212068],
        "RHR63": [5.12e-10, -2.54041e-07, 3.17459e-05, -0.002175019, 1.034503858],
        "RHR125": [3.78e-10, -1.20e-07, -2.41e-06, 0.00018656, 0.969804219],
        "RHR250": [-3.90e-10, 3.06e-07, -7.71122e-05, 0.004515181, 0.855559011],
        "RHR500": [-6.78e-10, 4.29e-07, -8.51744e-05, 0.003218463, 0.872820273],
        "RHR1000": [-4.88e-10, 2.78e-07, -4.34443e-05, -0.000879014, 0.898145566],
        "RHR2500": [-2.43e-10, 1.12e-07, -5.36e-06, -0.003676684, 0.859450989],
    }

    LOAD_FACTOR = {
        "BENDING": 1,
        "AXIAL": 0.7,
        "SHEAR": 0.57735,
    }

    @staticmethod
    def reliability_factor(prob: float) -> float:
        return 1 - norm.ppf(
            prob / 100, loc=0, scale=ModificationFactors.STANDARD_DEVIATION
        )

    @staticmethod
    def surface_factor(surface_finish: str, ult_strenght: float) -> float:
        a, b, c, d, e = ModificationFactors.SURFACE_FACTOR[surface_finish]
        return (
            a * ult_strenght ** 4
            + b * ult_strenght ** 3
            + c * ult_strenght ** 2
            + d * ult_strenght
            + e
        )

    @staticmethod
    def load_factor(load_type: str):
        return ModificationFactors.LOAD_FACTOR[load_type]
