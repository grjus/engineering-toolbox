import React, { useEffect } from 'react';
import Chartjs from 'chart.js';
import PropTypes from 'prop-types';
// import { FormContent } from '../Card/style';
// import useWindowSize from './customHooks';

const ChartTemplate = ({
  chartOptions, handleChart, chartRef, chartStyle,
}) => {
  // const chartContainer = useRef(null);
  console.log(chartStyle);
  useEffect(() => {
    if (chartRef && chartRef.current) {
      const newChartInstance = new Chartjs(chartRef.current, chartOptions);
      handleChart(newChartInstance);
    }
  }, [chartRef, chartOptions, handleChart]);

  // const size = useWindowSize();

  return (
    <div className="chart-container" style={{ position: 'relative', height: '50%', width: '80%' }}>
      <canvas ref={chartRef} />
    </div>
  );
};

ChartTemplate.propTypes = {
  chartOptions: PropTypes.instanceOf(Object).isRequired,
  handleChart: PropTypes.func.isRequired,
  chartRef: PropTypes.instanceOf(Object).isRequired,
  chartStyle: PropTypes.shape({
    width: PropTypes.string,
    height: PropTypes.string,
  }),

};
ChartTemplate.defaultProps = {
  chartStyle: {
    width: '900px',
    height: '550',
  },

};

export default ChartTemplate;
