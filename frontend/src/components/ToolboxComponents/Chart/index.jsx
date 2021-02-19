import React, { useRef, useEffect } from 'react';
import Chartjs from 'chart.js';
import PropTypes from 'prop-types';

const ChartTemplate = ({
  chartOptions, handleChart, chartStyle,
}) => {
  const chartContainer = useRef(null);

  useEffect(() => {
    if (chartContainer && chartContainer.current) {
      const newChartInstance = new Chartjs(chartContainer.current, chartOptions);
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
    heigth: '450px',
    width: '1250px',
  },

};

export default ChartTemplate;
