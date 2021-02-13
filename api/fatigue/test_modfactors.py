from modfactors import ModificationFactors
import unittest


class TestModificationFactors(unittest.TestCase):
    def setUp(self):
        self.ult_strength = 155

    def tearDown(self):
        pass

    def test_load_factor(self):
        result = ModificationFactors.load_factor("AXIAL")
        self.assertEqual(result, 0.7)

    def test_surface_factor(self):
        surface_finish = ["RHR32", "RHR125", "RHR250"]
        expected_results = [0.88, 0.71, 0.62]
        for surface, result in zip(surface_finish, expected_results):
            self.assertEqual(
                round(
                    ModificationFactors.surface_factor(surface, self.ult_strength), 2
                ),
                result,
            )

    def test_reliability_factor(self):
        result = ModificationFactors.reliability_factor(95)
        self.assertEqual(round(result, 3), 0.868)


if __name__ == "__main__":
    unittest.main()
