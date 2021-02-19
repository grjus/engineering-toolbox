import React, { useState, useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Card from '../../ToolboxComponents/Card';
import { Title, FormContent, ButtonContainer } from '../../ToolboxComponents/Card/style';
import DropDown from '../../ToolboxComponents/Dropdown';
import { unitSystemItems } from '../MaterialData/constants';
import { TableHeaders } from '../StressInput/TableHeaders';
import DataTable from '../../ToolboxComponents/JExcel';
import { tableHeaders, jexcelConfig, EXCEL_COLUMN_WIDTH } from './config';
import { FatigueContext, FatigueContextDispatch } from '../context';
import CustomButton from '../../ToolboxComponents/Button/Button';

function Results() {
  const fatigueState = useContext(FatigueContext);
  const fatigueStateDispatch = useContext(FatigueContextDispatch);
  const [dataTable, setDataTable] = useState(null);
  const { control } = useForm({
    defaultValues: {
      unitSystem: unitSystemItems[0].name,
    },
  });

  useEffect(() => {
    if (dataTable !== null) {
      dataTable.setData(fatigueState.results.excelData);
    }
  }, [dataTable, fatigueState]);

  const handleBack = () => {
    fatigueStateDispatch((prev) => ({
      ...prev, activeStep: 2,
    }));
  };

  return (
    <Card>
      <Title>
        Select stress unit system
      </Title>
      <FormContent>
        <DropDown control={control} name="unitSystem" dropDownItems={unitSystemItems} />
      </FormContent>
      <Title>Stress results</Title>
      <FormContent>
        <TableHeaders headersList={tableHeaders} unit={fatigueState.unitSystem} colWidth={EXCEL_COLUMN_WIDTH} />
        <DataTable options={jexcelConfig} handleSheet={setDataTable} />
      </FormContent>
      <Title>Stress data</Title>
      <ButtonContainer>
        <CustomButton handleClick={handleBack} label="Back" color="secondary" buttonType="contained" />
      </ButtonContainer>

    </Card>
  );
}

export default Results;
