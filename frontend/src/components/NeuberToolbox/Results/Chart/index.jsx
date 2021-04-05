import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import ChartTemplate from '../../../ToolboxComponents/Chart';
import { chartOptions } from './config';
import { chartStyle } from './style';
import { FadeContainer } from '../../../ToolboxComponents/FadeContainer/FadeContainer';
import DetailsHeader from '../OuputTable/DetailsHeader';
import { StyledContainer } from '../style';

export const NeuberChart = ({ results }) => {
  const { XYData, UnitSystem } = results;
  const { NeuberHyperbola, RambergOsgood } = XYData;
  const { Neuber, Glinka } = results;
  const [chart, setChart] = useState(null);
  const chartRef = useRef(null);
  const [expand, setExpand] = useState(false);

  useEffect(() => {
    if (chart !== null && Neuber.Stress !== 'n/a') {
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
      chart.data.datasets.push(
        {
          label: 'Neuber point',
          backgroundColor: 'black',
          pointRadius: 6,
          borderWidth: 2.5,
          borderColor: 'black',
          fill: true,
          data: [{
            x: Neuber.TotalStrain,
            y: Neuber.Stress,
          }],
        },
      );
      chart.data.datasets.push(
        {
          label: 'Glinka point',
          backgroundColor: 'blue',
          pointRadius: 6,
          borderWidth: 2.5,
          borderColor: 'blue',
          fill: true,
          data: [{
            x: Glinka.TotalStrain,
            y: Glinka.Stress,
          }],
        },
      );

      const maxStress = Math.max(...RambergOsgood.Stress);
      chart.options.scales.yAxes[0].scaleLabel.labelString = `Stress, ${UnitSystem}`;
      chart.options.scales.yAxes[0].ticks.max = 1.2 * maxStress;
      chart.options.scales.yAxes[0].ticks.stepSize = maxStress / 10;
      chart.options.scales.xAxes[0].ticks.max = RambergOsgood.TotalElongation;
      chart.update();
    }
  }, [chart, UnitSystem, results, NeuberHyperbola, RambergOsgood, chartRef, Glinka, Neuber]);

  // useEffect(() => {
  //   if (expand && bottomRef !== null) {
  //     window.scrollBy({
  //       top: -300, // could be negative value
  //       left: 0,
  //       behavior: 'smooth',
  //     });
  //   }
  // }, [expand, bottomRef]);

  return (
    <FadeContainer condition={!results.isInit} timeout={1000}>
      <>
        <DetailsHeader onClick={() => setExpand((prev) => !prev)} expand={expand} label="Stress strain data " />
        <StyledContainer hidden={!expand} height="55rem">
          <ChartTemplate chartOptions={chartOptions} handleChart={setChart} chartRef={chartRef} chartStyle={chartStyle} />
        </StyledContainer>

      </>

    </FadeContainer>
  );
};

export default NeuberChart;

NeuberChart.propTypes = {
  results: PropTypes.shape({
    isInit: PropTypes.bool,
    UnitSystem: PropTypes.string,
    Neuber: PropTypes.instanceOf(Object),
    Glinka: PropTypes.instanceOf(Object),
    XYData: PropTypes.instanceOf(Object),
  }).isRequired,
};
