import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import Card from '../../ToolboxComponents/Card';
import {
  ButtonContainer, ErrorMessage, FormContent, Title,
} from '../../ToolboxComponents/Card/style';
import CustomButton from '../../ToolboxComponents/Button/Button';
import DataTable from '../../ToolboxComponents/JExcel';
import { FatigueContextDispatch, FatigueContext } from '../context';
import { handleExcelOptions, tableHeaders, EXCEL_COLUMN_WIDTH } from './config';
import { fatigueTheoryItems } from './constants';
import { TableHeaders } from './TableHeaders';
import { TableButtonContainer } from './style';
import {
  addRow, deleteRow, saveSpreadsheet,
} from './jexcelHelpers';
import { dataTableValidation, yieldStrValRules } from '../validators';
import DropDown from '../../ToolboxComponents/Dropdown';
import { TextBox } from '../../ToolboxComponents/TextBox';

function StressInput() {
  const fatigueStateDispatch = useContext(FatigueContextDispatch);
  const fatigueState = useContext(FatigueContext);
  const [dataTable, setDataTable] = useState(null);
  const {
    control, watch, register, handleSubmit, errors,
  } = useForm({
    defaultValues: {
      fatigueTheory: fatigueState.fatigueTheory,
      yieldStrength: fatigueState.yieldStrength,
    },
  });

  const { fatigueTheory } = watch();

  const handleBack = () => {
    fatigueStateDispatch({
      ...fatigueState, activeStep: 0,
    });
  };

  const submitData = (data) => {
    const excelValidError = dataTableValidation(dataTable, fatigueState.ultimateStrength);
    if (excelValidError === false) {
      const stressInputData = {
        excelData: dataTable.getData(),
        excelDataApi: [dataTable.getColumnData([0]), dataTable.getColumnData([1]), dataTable.getColumnData([2])],
        ...data,
      };
      fatigueStateDispatch((prev) => ({
        ...prev, ...stressInputData, activeStep: 2,
      }));
    } else {
      fatigueStateDispatch((prev) => ({
        ...prev, excelError: excelValidError,
      }));
    }
  };

  return (
    <Card>
      <Title>Specify stress values</Title>
      <FormContent>
        <TableButtonContainer>
          <CustomButton handleClick={() => addRow(dataTable)} label="Add row" buttonType="outlined" color="primary" />
          <CustomButton handleClick={() => deleteRow(dataTable)} label="Delete row" buttonType="outlined" color="primary" />
          <CustomButton handleClick={() => saveSpreadsheet(dataTable)} label="Save data" buttonType="outlined" color="primary" />
        </TableButtonContainer>
        <TableHeaders headersList={tableHeaders} unit={fatigueState.unitSystem} colWidth={EXCEL_COLUMN_WIDTH} />
        <DataTable options={handleExcelOptions()} handleSheet={setDataTable} />
        <ErrorMessage>{fatigueState.excelError}</ErrorMessage>
      </FormContent>
      <Title>Select fatigue theory</Title>
      <FormContent style={{ paddingTop: '0px' }}>
        <DropDown name="fatigueTheory" control={control} dropDownItems={fatigueTheoryItems} />
      </FormContent>

      <FormContent style={{ marginTop: '10px' }}>
        {fatigueTheory === 'SODERBERG' ? (
          <TextBox
            name="yieldStrength"
            inputRef={register(yieldStrValRules)}
            label={`Yield strength,${fatigueState.unitSystem}`}
            error={errors.yieldStrength}
          />
        ) : null}
      </FormContent>

      <ButtonContainer>
        <CustomButton handleClick={handleSubmit(submitData)} label="Next" buttonType="contained" color="primary" />
        <CustomButton handleClick={handleBack} label="Back" buttonType="contained" color="secondary" />
      </ButtonContainer>
    </Card>
  );
}

export default StressInput;
