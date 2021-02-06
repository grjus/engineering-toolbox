from fatigue import Fatigue, FatigueModel
import unittest


class TestFatigue(unittest.TestCase):
    def setUp(self):
        self.mat_constant = 155
        self.case_1 = (-25, 25)
        self.case_2 = (0, 50)
        self.case_3 = (20, 250)
        self.yield_str = 110

    def tearDown(self):
        pass

    def test_goodman_case1(self):
        fatigue = Fatigue(*self.case_1, self.mat_constant, FatigueModel.GOODMAN)
        self.assertEqual(round(fatigue.get_fatigue_stress(), 2), 25.00)

    def test_goodman_case2(self):
        fatigue = Fatigue(*self.case_2, self.mat_constant, FatigueModel.GOODMAN)
        self.assertEqual(round(fatigue.get_fatigue_stress(), 2), 29.81)

    def test_goodman_case3(self):
        with self.assertRaises(ValueError):
            Fatigue(*self.case_3, self.mat_constant, FatigueModel.GOODMAN)

    def test_gerber_case1(self):
        fatigue = Fatigue(*self.case_1, self.mat_constant, FatigueModel.GERBER)
        self.assertEqual(round(fatigue.get_fatigue_stress(), 2), 25.00)

    def test_gerber_case2(self):
        fatigue = Fatigue(*self.case_2, self.mat_constant, FatigueModel.GERBER)
        self.assertEqual(round(fatigue.get_fatigue_stress(), 2), 25.67)

    def test_gerber_case3(self):
        with self.assertRaises(ValueError):
            Fatigue(*self.case_3, self.mat_constant, FatigueModel.GERBER)

    def test_soderberg_case1(self):
        fatigue = Fatigue(*self.case_1, self.yield_str, FatigueModel.SODERBERG)
        self.assertEqual(round(fatigue.get_fatigue_stress(), 2), 25.00)

    def test_soderberg_case2(self):
        fatigue = Fatigue(*self.case_2, self.yield_str, FatigueModel.SODERBERG)
        self.assertEqual(round(fatigue.get_fatigue_stress(), 2), 32.35)

    def test_soderberg_case3(self):
        with self.assertRaises(ValueError):
            Fatigue(*self.case_3, self.yield_str, FatigueModel.SODERBERG)


if __name__ == "__main__":
    unittest.main()
