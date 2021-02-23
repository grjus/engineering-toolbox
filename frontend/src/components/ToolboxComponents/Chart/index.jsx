import React, { useEffect } from 'react';
import Chartjs from 'chart.js';
import PropTypes from 'prop-types';
import { FormContent } from '../Card/style';

const ChartTemplate = ({
  chartOptions, handleChart, chartRef,
}) => {
  // const chartContainer = useRef(null);

  useEffect(() => {
    if (chartRef && chartRef.current) {
      const newChartInstance = new Chartjs(chartRef.current, chartOptions);
      handleChart(newChartInstance);
    }
  }, [chartRef, chartOptions, handleChart]);

  return (
    <FormContent>
      <canvas width="900px" height="550" ref={chartRef} />
    </FormContent>
  );
};

ChartTemplate.propTypes = {
  chartOptions: PropTypes.instanceOf(Object).isRequired,
  handleChart: PropTypes.func.isRequired,
  chartRef: PropTypes.instanceOf(Object).isRequired,

};
ChartTemplate.defaultProps = {

};

export default ChartTemplate;
