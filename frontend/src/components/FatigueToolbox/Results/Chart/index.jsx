import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DetailsHeader from '../../../NeuberToolbox/Results/OuputTable/DetailsHeader';
import { StyledContainer } from '../styles';
import ChartFatigue from './ChartFatigue';

const ResultChart = ({ chartRef, unit }) => {
  const [expand, setExpand] = useState(false);

  return (
    <>
      <span style={{ marginLeft: '-20px' }}>
        <DetailsHeader onClick={() => setExpand((prev) => !prev)} expand={expand} label="Fatigue chart" />
      </span>
      <StyledContainer hidden={!expand} height="32rem" style={{ width: '120%' }}>
        <ChartFatigue unit={unit} chartRef={chartRef} />
      </StyledContainer>
    </>
  );
};

export default ResultChart;

ResultChart.propTypes = {
  chartRef: PropTypes.instanceOf(Object).isRequired,
  unit: PropTypes.string.isRequired,
};
