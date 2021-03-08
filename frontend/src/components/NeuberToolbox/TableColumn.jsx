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
        <THRow key={`${label}_${item}`}>
          <THRowLabel>
            {item.replace(/([A-Z])/g, ' $1')}
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
