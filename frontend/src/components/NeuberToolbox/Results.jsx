import React from 'react';
import PropTypes from 'prop-types';
import { FormContent } from '../ToolboxComponents/Card/style';
import Chart from './Chart';
import { OutputContainer, Separator } from './style';
import TableColumn from './TableColumn';

function Results({ results }) {
  const { Neuber, Glinka } = results;
  return (
    <FormContent>
      <Chart results={results} />
      <Separator />
      <OutputContainer>
        <TableColumn label="Neuber correction" data={Neuber} />
        <TableColumn label="Glinka correction" data={Glinka} />
      </OutputContainer>

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
