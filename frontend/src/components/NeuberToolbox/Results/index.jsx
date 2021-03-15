import React from 'react';
import PropTypes from 'prop-types';
import { FadeContainer } from '../../ToolboxComponents/FadeContainer/FadeContainer';
import { FormContent } from '../../ToolboxComponents/Card/style';
import Chart from './Chart';
import OutputTable from './OuputTable';

function Results({ results, isRunning }) {
  return (

    <FormContent>
      <OutputTable results={results} isRunning={isRunning} />
      <FadeContainer condition={!results.isInit} timeout={1500}>
        <Chart results={results} />
      </FadeContainer>
    </FormContent>
  );
}

export default Results;

Results.propTypes = {
  results: PropTypes.shape({
    isInit: PropTypes.bool,
    UnitSystem: PropTypes.string,
    Neuber: PropTypes.instanceOf(Object),
    Glinka: PropTypes.instanceOf(Object),
    XYData: PropTypes.instanceOf(Object),
  }).isRequired,
  isRunning: PropTypes.bool.isRequired,
};

Results.defaultProps = {
};
