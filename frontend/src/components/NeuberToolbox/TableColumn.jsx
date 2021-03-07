import React from 'react';
import PropTypes from 'prop-types';
import {
  TRContainer, TRHeader, THRow, THRowLabel, THRowContent,
} from './style';

function TableColumn({ data, label }) {
  return (
    <TRContainer>
      <TRHeader>{label}</TRHeader>
      {Object.keys(data).map((item) => (
        <THRow>
          <THRowLabel>
            {item}
            :
          </THRowLabel>
          <THRowContent>{data[item]}</THRowContent>
        </THRow>
      ))}

    </TRContainer>
  );
}

export default TableColumn;

TableColumn.propTypes = {
  data: PropTypes.shape({
    Stress: PropTypes.number.isRequired,
    TotalStrain: PropTypes.number.isRequired,
    ElasticStrain: PropTypes.number.isRequired,
    PlasticStrain: PropTypes.number.isRequired,
    ResidualStress: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
  }).isRequired,
  label: PropTypes.string.isRequired,
};
