import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ChartTemplate from '../../ToolboxComponents/Chart';
import { FatigueContext } from '../context';
import { chartOptions } from './config';

export const FatigueChart = ({ chartData }) => {
  const [chart, setChart] = useState(null);

  const fatigueState = useContext(FatigueContext);

  useEffect(() => {
    console.log(chart);
    console.log(fatigueState);
  }, [chart, fatigueState]);

  return <ChartTemplate chartData={chartData} chartOptions={{ chartOptions, type: 'scatter' }} handleChart={setChart} />;
};

export default FatigueChart;

FatigueChart.propTypes = {
  chartData: PropTypes.instanceOf(Object).isRequired,
};
