from fatigue import FatigueStress, FatigueTheory
from modFactors import ModificationFactors
from fatiguelife import BaskinModel
import unittest


class TestFatigue(unittest.TestCase):
    def setUp(self):
        self.mat_constant = 155
        self.min_stress = [-25, -30, 0]
        self.max_stress = [67, 78, 80]
        self.fatigue_stress = FatigueStress(
            self.min_stress, self.max_stress, self.mat_constant, FatigueTheory.GOODMAN
        )
        self.stress = self.fatigue_stress.fatigue_stress()
        self.surface_factor = ModificationFactors.surface_factor(
            "RHR32", self.mat_constant
        )
        self.rel_factor = ModificationFactors.reliability_factor(95)

    def tearDown(self):
        pass

    def test_allowable_cycles(self):
        baskn = BaskinModel(
            self.stress, self.mat_constant, self.surface_factor * self.rel_factor
        )
        allowable_cycles = list(
            map(lambda x: round(x, 0), baskn.get_allowable_cycles())
        )
        expected = [321653, 51025, 281802]
        difference = list(
            map(lambda x, y: abs(x / y) * 100, allowable_cycles, expected)
        )
        for diff in difference:
            self.assertTrue(diff > 99 and diff < 101)

    def test_chart_plot(self):
        baskin = BaskinModel(self.stress, 155, self.surface_factor)
        cycles, stress = baskin.get_chart_data(True)
        cycles_not, stress_not = baskin.get_chart_data(False)
        from matplotlib import pyplot as plt

        plt.plot(cycles, stress, "red", cycles_not, stress_not, "black")
        plt.show()


if __name__ == "__main__":
    unittest.main()
