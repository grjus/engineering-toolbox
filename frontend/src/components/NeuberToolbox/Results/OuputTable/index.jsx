import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FadeContainer } from '../../../ToolboxComponents/FadeContainer/FadeContainer';
import TableColumn from './TableColumn';
import { StyledContainer } from '../style';

import DetailsHeader from './DetailsHeader';

function OutputTable({ results, isRunning }) {
  const [expand, setExpand] = useState(true);
  const { Neuber, Glinka } = results;

  useEffect(() => {
    if (isRunning) {
      setExpand(true);
    }
  }, [isRunning]);

  return (
    <FadeContainer condition={!results.isInit} timeout={1000}>
      <>
        <DetailsHeader onClick={() => setExpand((prev) => !prev)} expand={expand} label="Summary" />
        <StyledContainer hidden={!expand}>
          <TableColumn label="Neuber rule" data={Neuber} />
          <TableColumn label="Glinka rule" data={Glinka} />
        </StyledContainer>
      </>
    </FadeContainer>
  );
}

export default OutputTable;

OutputTable.propTypes = {
  results: PropTypes.shape({
    isInit: PropTypes.bool,
    UnitSystem: PropTypes.string,
    Neuber: PropTypes.instanceOf(Object),
    Glinka: PropTypes.instanceOf(Object),
    XYData: PropTypes.instanceOf(Object),
  }).isRequired,
  isRunning: PropTypes.bool.isRequired,
};
