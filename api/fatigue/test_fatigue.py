from fatigue import FatigueStress, FatigueTheory
import unittest


class TestFatigue(unittest.TestCase):
    def setUp(self):
        self.mat_constant = 155
        self.yield_str = 110
        self.case_1 = ((-25.23, -45.23, 34.22, 0.0), (23.0, 56.34, 56.45, 57.23))
        self.case_2 = ((-25.23, -45.23, 34.22, 0.0), (23.0, 56.34, 56.45, 160))
        self.case_3 = ((-25.23, -45.23, 64.5, 0.0), (23.0, 56.34, 56.45, 57.23))

    def tearDown(self):
        pass

    def test_goodman_case1(self):
        expected = [23.94, 52.67, 15.71, 35.09]
        fatigue = FatigueStress(*self.case_1, self.mat_constant, FatigueTheory.GOODMAN)
        result = list(map(lambda x: round(x, 2), fatigue.fatigue_stress()))
        self.assertEqual(result, expected)

    def test_goodman_case2(self):
        with self.assertRaises(ValueError):
            fatigue = FatigueStress(
                *self.case_2, self.mat_constant, FatigueTheory.GOODMAN
            )

    def test_goodman_case3(self):
        with self.assertRaises(ValueError):
            fatigue = FatigueStress(
                *self.case_3, self.mat_constant, FatigueTheory.GOODMAN
            )
            result = list(map(lambda x: round(x, 2), fatigue.fatigue_stress()))

    def test_soderberg_case1(self):
        expected = [23.87, 53.49, 18.91, 38.68]
        fatigue = FatigueStress(*self.case_1, self.yield_str, FatigueTheory.SODERBERG)
        result = list(map(lambda x: round(x, 2), fatigue.fatigue_stress()))
        self.assertEqual(result, expected)

    def test_soderberg_case2(self):
        with self.assertRaises(ValueError):
            fatigue = FatigueStress(
                *self.case_2, self.yield_str, FatigueTheory.SODERBERG
            )

    def test_soderberg_case3(self):
        with self.assertRaises(ValueError):
            fatigue = FatigueStress(
                *self.case_3, self.yield_str, FatigueTheory.SODERBERG
            )

    def test_gerber_case1(self):
        expected = [24.12, 50.85, 12.15, 29.62]
        fatigue = FatigueStress(*self.case_1, self.mat_constant, FatigueTheory.GERBER)
        result = list(map(lambda x: round(x, 2), fatigue.fatigue_stress()))
        self.assertEqual(result, expected)

    def test_gerber_case2(self):
        with self.assertRaises(ValueError):
            fatigue = FatigueStress(
                *self.case_2, self.mat_constant, FatigueTheory.GERBER
            )

    def test_gerber_case3(self):
        with self.assertRaises(ValueError):
            fatigue = FatigueStress(
                *self.case_3, self.mat_constant, FatigueTheory.GERBER
            )


if __name__ == "__main__":
    unittest.main()
