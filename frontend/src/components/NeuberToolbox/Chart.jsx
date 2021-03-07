import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import ChartTemplate from '../ToolboxComponents/Chart';
import { chartOptions } from './config';
import { chartStyle } from './style';

export const NeuberChart = ({ results }) => {
  const { XYData, UnitSystem } = results;
  const { NeuberHyperbola, RambergOsgood } = XYData;
  const [chart, setChart] = useState(null);
  const chartRef = useRef(null);

  useEffect(() => {
    if (chart !== null && results) {
      chart.data.datasets = [];
      chart.data.datasets.push(
        {
          label: 'Ramberg Osgood',
          type: 'line',
          backgroundColor: '#12a112',
          pointRadius: 0,
          borderWidth: 3.5,
          borderColor: '#12a112',
          fill: false,
          data: RambergOsgood.Stress.map((item, idx) => ({
            x: RambergOsgood.Strain[idx],
            y: item,
          })),
        },
      );
      chart.data.datasets.push(
        {
          label: 'Neuber Hyperbola',
          type: 'line',
          backgroundColor: 'crimson',
          pointRadius: 1,
          borderWidth: 3.5,
          borderColor: 'crimson',
          fill: false,
          data: NeuberHyperbola.Stress.map((item, idx) => ({
            x: NeuberHyperbola.Strain[idx],
            y: item,
          })),
        },
      );
      // chart.data.datasets.push(
      //   {
      //     label: 'Analysis data',
      //     backgroundColor: 'black',
      //     pointRadius: 5,
      //     borderWidth: 1.5,
      //     borderColor: 'black',
      //     fill: false,
      //     data: (() => {
      //       const outData = [];
      //       for (let row = 0; row < excelData.length; row++) {
      //         outData.push({
      //           x: excelData[row][5],
      //           y: excelData[row][4],
      //         });
      //       }
      //       return outData;
      //     })(),
      //   },
      // );
      const maxStress = Math.max(...RambergOsgood.Stress);
      chart.options.scales.yAxes[0].scaleLabel.labelString = `Stress, ${UnitSystem}`;
      chart.options.scales.yAxes[0].ticks.max = 1.2 * maxStress;
      chart.options.scales.yAxes[0].ticks.stepSize = maxStress / 10;
      chart.options.scales.xAxes[0].ticks.max = RambergOsgood.TotalElongation;
      chart.update();
    }
  }, [chart, UnitSystem, results, NeuberHyperbola, RambergOsgood, chartRef]);

  return <ChartTemplate chartOptions={chartOptions} handleChart={setChart} chartRef={chartRef} chartStyle={chartStyle} />;
};

export default NeuberChart;

NeuberChart.propTypes = {
  results: PropTypes.shape({
    UnitSystem: PropTypes.string,
    Neuber: PropTypes.instanceOf(Object),
    Glinka: PropTypes.instanceOf(Object),
    XYData: PropTypes.instanceOf(Object),
  }).isRequired,
};
