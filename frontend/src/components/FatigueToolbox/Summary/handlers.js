import { convertUnit, STRESS_UNIT } from '../../utils/UnitConversion';

export const prepareDataToApi = (state) => {
  const {
    ultimateStrength, fatigueTheory, yieldStrength, excelDataApi, surfaceFactor, loadFactor, reliabilityFactor, userDefinedFactor, unitSystem,
  } = state;

  return {
    surfaceFactor,
    loadFactor,
    reliabilityFactor,
    userDefinedFactor,
    stressData: {
      ultimateStrength: convertUnit(STRESS_UNIT, ultimateStrength).from(unitSystem).to('ksi'),
      yieldStrength: fatigueTheory === 'SODERBERG' ? convertUnit(STRESS_UNIT, yieldStrength).from(unitSystem).to('ksi') : null,
      minStress: excelDataApi[0].map((item) => convertUnit(STRESS_UNIT, item).from(unitSystem).to('ksi')),
      maxStress: excelDataApi[1].map((item) => convertUnit(STRESS_UNIT, item).from(unitSystem).to('ksi')),
      requiredCycles: excelDataApi[2],
      fatigueTheory,
    },
  };
};
