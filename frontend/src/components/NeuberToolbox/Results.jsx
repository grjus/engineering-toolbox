import React from 'react';
import PropTypes from 'prop-types';
import { FormContent } from '../ToolboxComponents/Card/style';
import Chart from './Chart';

function Results({ results }) {
  return (
    <FormContent>
      <Chart results={results} />

    </FormContent>
  );
}

export default Results;

Results.propTypes = {
  results: PropTypes.shape({
    UnitSystem: PropTypes.string,
    Neuber: PropTypes.instanceOf(Object),
    Glinka: PropTypes.instanceOf(Object),
    XYData: PropTypes.instanceOf(Object),
  }).isRequired,
};
