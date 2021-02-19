import React, { useRef, useEffect } from 'react';
import Chartjs from 'chart.js';
import PropTypes from 'prop-types';

const ChartTemplate = ({
  chartData, chartOptions, handleChart, chartStyle,
}) => {
  const chartContainer = useRef(null);

  useEffect(() => {
    if (chartContainer && chartContainer.current) {
      const newChartInstance = new Chartjs(chartContainer.current, { ...chartData, ...chartOptions });
      handleChart(newChartInstance);
    }
  }, [chartContainer]);

  return (
    <div style={{ marginLeft: chartStyle.marginLeft, marginTop: chartStyle.marginTop }}>
      <canvas height={chartStyle.height} width={chartStyle.width} ref={chartContainer} />
    </div>
  );
};

ChartTemplate.propTypes = {
  chartData: PropTypes.instanceOf(Object).isRequired,
  chartOptions: PropTypes.instanceOf(Object).isRequired,
  handleChart: PropTypes.func.isRequired,
  chartStyle: PropTypes.shape({
    marginLeft: PropTypes.string,
    marginTop: PropTypes.string,
    height: PropTypes.string,
    width: PropTypes.string,
  }),
};
ChartTemplate.defaultProps = {
  chartStyle: {
    marginLeft: '50px',
    marginTop: '-20px',
    heigth: '350px',
    width: '850px',
  },

};

export default ChartTemplate;
