import React from 'react';
import PropTypes from 'prop-types';
import { TableHeader, TableHeaderContainer } from './style';

export const TableHeaders = ({ headersList, unit, colWidth }) => (
  <TableHeaderContainer width={headersList.length} colWidth={colWidth}>
    {headersList.map((item) => (
      <TableHeader key={item.key}>
        {item.label}
        ,
        {item.label.toLowerCase().includes('stress') ? unit : null}
      </TableHeader>
    ))}
  </TableHeaderContainer>
);

TableHeaders.propTypes = {
  headersList: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    key: PropTypes.string.isRequired,
  })).isRequired,
  unit: PropTypes.string.isRequired,
  colWidth: PropTypes.number,
};

TableHeaders.defaultProps = {
  colWidth: 100,
};

export default TableHeaders;
