import React, { useContext, useState, useEffect } from 'react';
import ChartTemplate from '../../ToolboxComponents/Chart';
import { FatigueContext } from '../context';
import { chartOptions } from './config';
import { theme } from '../../../style';

export const FatigueChart = () => {
  const [chart, setChart] = useState(null);

  const fatigueState = useContext(FatigueContext);
  const { chartData, excelData } = fatigueState.results;
  const { derated, raw } = chartData;

  useEffect(() => {
    if (chart !== null && derated) {
      chart.data.datasets = [];
      chart.data.datasets.push(
        {
          label: 'Unmodified curve',
          type: 'line',
          backgroundColor: 'rgba(0,0,0,0.6)',
          pointRadius: 1,
          borderWidth: 1.5,
          borderColor: 'rgba(0,0,0,0.6)',
          fill: false,
          data: raw.stress.map((item, idx) => ({
            x: raw.cycles[idx],
            y: item,
          })),
        },
      );
      chart.data.datasets.push(
        {
          label: 'Modified curve',
          type: 'line',
          backgroundColor: theme.logoColor,
          pointRadius: 1,
          borderWidth: 1.5,
          borderColor: theme.logoColor,
          fill: false,
          data: derated.stress.map((item, idx) => ({
            x: derated.cycles[idx],
            y: item,
          })),
        },
      );
      chart.data.datasets.push(
        {
          label: 'Analysis data',
          backgroundColor: theme.logoColorHover,
          pointRadius: 3,
          borderWidth: 1.5,
          borderColor: theme.logoColorHover,
          fill: false,
          data: (() => {
            const outData = [];
            for (let row = 0; row < excelData.length; row++) {
              outData.push({
                x: excelData[row][5],
                y: excelData[row][4],
              });
            }
            return outData;
          })(),
        },
      );
      chart.update();
    }
  }, [chart, derated]);

  return <ChartTemplate chartOptions={chartOptions} handleChart={setChart} />;
};

export default FatigueChart;
