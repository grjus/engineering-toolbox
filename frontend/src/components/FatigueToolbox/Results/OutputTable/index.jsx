import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FormContent } from '../../../ToolboxComponents/Card/style';
import { TableHeaders } from '../../StressInput/TableHeaders';
import { tableHeaders, jexcelConfig, EXCEL_COLUMN_WIDTH } from '../config';
import DataTable from '../../../ToolboxComponents/JExcel';
import DetailsHeader from '../../../NeuberToolbox/Results/OuputTable/DetailsHeader';
import { StyledContainer } from '../styles';

const ResultTable = ({ handleSheet, unit }) => {
  const [expand, setExpand] = useState(true);

  useEffect(() => {
    setExpand(true);
  }, [unit]);

  return (
    <>
      <span style={{ marginLeft: '-20px' }}>
        <DetailsHeader onClick={() => setExpand((prev) => !prev)} expand={expand} label="Results summary" />
      </span>
      <StyledContainer hidden={!expand}>
        <FormContent>
          <TableHeaders headersList={tableHeaders} unit={unit} colWidth={EXCEL_COLUMN_WIDTH} />
          <DataTable options={jexcelConfig} handleSheet={handleSheet} />
        </FormContent>
      </StyledContainer>
    </>
  );
};

export default ResultTable;

ResultTable.propTypes = {
  handleSheet: PropTypes.func.isRequired,
  unit: PropTypes.string.isRequired,
};
