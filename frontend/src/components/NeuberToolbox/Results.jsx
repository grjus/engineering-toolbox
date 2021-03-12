import React from 'react';
import PropTypes from 'prop-types';
import { Fade } from '@material-ui/core';
import { FormContent } from '../ToolboxComponents/Card/style';
import Chart from './Chart';
import { OutputContainer, Separator } from './style';
import TableColumn from './TableColumn';

function Results({ results }) {
  const { Neuber, Glinka } = results;
  return (
    <FormContent>
      <Chart results={results} />
      <Fade in={results.Glinka.Stress !== 'n/a'} timeout={1500}>
        <span>
          <Separator />

          <OutputContainer>
            <TableColumn label="Neuber correction" data={Neuber} />
            <TableColumn label="Glinka correction" data={Glinka} />
          </OutputContainer>
        </span>
      </Fade>

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
