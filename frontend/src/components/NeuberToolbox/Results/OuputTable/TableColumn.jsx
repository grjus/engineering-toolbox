import React from 'react';
import PropTypes from 'prop-types';
import { Divider, Fade } from '@material-ui/core';
import {
  TableContainer, Table, TableRow, TableHeader, Title, TableItem,
} from './style';

function TableColumn({ data, label }) {
  return (
    <Fade in={data.Stress !== 'n/a'}>
      <TableContainer>
        <Title>{label}</Title>
        <Divider />
        <Table>
          <tbody>
            <TableRow>
              <TableHeader>
                Name
              </TableHeader>
              <TableHeader>
                Value
              </TableHeader>
            </TableRow>

            {Object.keys(data).map((item) => (

              <TableRow key={item}>

                <TableItem>{item.replace(/([A-Z])/g, ' $1')}</TableItem>
                <TableItem>{data[item] < 1 && data[item] > 0 ? data[item].toExponential(4) : data[item]}</TableItem>

              </TableRow>

            ))}
          </tbody>

        </Table>

      </TableContainer>
    </Fade>

  );
}

export default TableColumn;

TableColumn.propTypes = {
  data: PropTypes.shape({
    Stress: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
    TotalStrain: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
    ElasticStrain: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
    PlasticStrain: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
    ResidualStress: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
  }).isRequired,
  label: PropTypes.string.isRequired,
};
