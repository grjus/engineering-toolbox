import { STRESS_UNIT, convertUnit } from '../../utils/UnitConversion';

export const dataConversion = (results, unit) => {
  const { excelData, chartData } = results;
  const { raw, derated } = chartData;
  const data = excelData.map((item) => item.map((each) => each));
  for (let row = 0; row < excelData.length; row++) {
    for (let item = 0; item < 5; item++) {
      if (unit === 'ksi') {
        data[row][item] = convertUnit(STRESS_UNIT, data[row][item]).from('ksi').to('MPa');
      } else {
        data[row][item] = convertUnit(STRESS_UNIT, data[row][item]).from('MPa').to('ksi');
      }
    }
  }
  let rawStress;
  let deratedStress;
  if (unit === 'ksi') {
    rawStress = raw.stress.map((item) => convertUnit(STRESS_UNIT, item).from('ksi').to('MPa'));
    deratedStress = derated.stress.map((item) => convertUnit(STRESS_UNIT, item).from('ksi').to('MPa'));
  } else {
    rawStress = raw.stress.map((item) => convertUnit(STRESS_UNIT, item).from('MPa').to('ksi'));
    deratedStress = derated.stress.map((item) => convertUnit(STRESS_UNIT, item).from('MPa').to('ksi'));
  }

  return {
    excelData: data,
    chartData: {
      derated: {
        stress: deratedStress,
        cycles: derated.cycles,
      },
      raw: {
        stress: rawStress,
        cycles: raw.cycles,
      },
    },
  };
};
