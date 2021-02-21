import React, { useRef, useEffect } from 'react';
import Chartjs from 'chart.js';
import PropTypes from 'prop-types';
import { FormContent } from '../Card/style';

const ChartTemplate = ({
  chartOptions, handleChart,
}) => {
  const chartContainer = useRef(null);

  useEffect(() => {
    if (chartContainer && chartContainer.current) {
      const newChartInstance = new Chartjs(chartContainer.current, chartOptions);
      handleChart(newChartInstance);
    }
  }, [chartContainer, chartOptions, handleChart]);

  return (
    <FormContent>
      <canvas width="900px" height="550" ref={chartContainer} />
    </FormContent>
  );
};

ChartTemplate.propTypes = {
  chartOptions: PropTypes.instanceOf(Object).isRequired,
  handleChart: PropTypes.func.isRequired,

};
ChartTemplate.defaultProps = {

};

export default ChartTemplate;
