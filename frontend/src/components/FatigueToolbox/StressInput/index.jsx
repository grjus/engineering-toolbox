import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Fade } from '@material-ui/core';
import Card from '../../ToolboxComponents/Card';
import {
  ButtonContainer, ErrorMessage, FormContent, Title,
} from '../../ToolboxComponents/Card/style';
import CustomButton from '../../ToolboxComponents/Button/Button';
import DataTable from '../../ToolboxComponents/JExcel';
import { FatigueContextDispatch, FatigueContext } from '../context';
import { HandleExcelOptions, tableHeaders, EXCEL_COLUMN_WIDTH } from './config';
import { fatigueTheoryItems } from './constants';
import { TableHeaders } from './TableHeaders';
import { TableButtonContainer } from './style';
import {
  addRow, deleteRow, saveSpreadsheet,
} from './jexcelHelpers';
import { dataTableValidation, yieldStrValRules } from '../validators';
import { FadeDropDown } from '../../ToolboxComponents/Dropdown';
import { FadeTextBox } from '../../ToolboxComponents/TextBox';
import Helper from './toast/Helper';
import ToastHelper from '../../ToolboxComponents/Toast';
import { DropdownContainer } from '../MaterialData/styles';
import { FadeContainer } from '../../ToolboxComponents/FadeContainer/FadeContainer';

function StressInput() {
  const fatigueStateDispatch = useContext(FatigueContextDispatch);
  const fatigueState = useContext(FatigueContext);
  const [dataTable, setDataTable] = useState(null);
  const [hideToast, setHideToast] = useState(false);
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
    setHideToast(true);
    fatigueStateDispatch({
      ...fatigueState,
      activeStep: 0,
      excelError: '',
    });
  };

  const submitData = (data) => {
    setHideToast(true);
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
    <FadeContainer timeout={500} condition>
      <Card>
        <ToastHelper toastStatus={hideToast} helperComponent={<Helper />} />
        <Title>Specify stress values</Title>
        <FormContent style={{ marginTop: '30px' }}>
          <TableButtonContainer>
            <CustomButton handleClick={() => addRow(dataTable)} label="Add row" buttonType="outlined" color="primary" />
            <CustomButton handleClick={() => deleteRow(dataTable)} label="Delete row" buttonType="outlined" color="primary" />
            <CustomButton handleClick={() => saveSpreadsheet(dataTable)} label="Save data" buttonType="outlined" color="primary" />
          </TableButtonContainer>
          <TableHeaders headersList={tableHeaders} unit={fatigueState.unitSystem} colWidth={EXCEL_COLUMN_WIDTH} />
          <DataTable options={HandleExcelOptions()} handleSheet={setDataTable} />

        </FormContent>
        <Fade timeout={250} in={fatigueState.excelError !== ''}>
          <ErrorMessage style={{ paddingLeft: '10px' }}>{fatigueState.excelError}</ErrorMessage>
        </Fade>
        <Title>Select fatigue theory</Title>
        <FormContent>
          <DropdownContainer style={{ height: '40px' }}>
            <FadeDropDown name="fatigueTheory" control={control} dropDownItems={fatigueTheoryItems} />
            <FadeTextBox
              timeout={250}
              unmountOnExit
              visible={fatigueTheory === 'SODERBERG'}
              name="yieldStrength"
              inputRef={register(yieldStrValRules)}
              label={`Yield strength,${fatigueState.unitSystem}`}
              error={errors.yieldStrength}
              variant="standard"
              style={{
                position: 'relative',
                left: '80px',
                top: '-8px',
              }}
            />
          </DropdownContainer>
        </FormContent>

        <ButtonContainer style={{ position: 'relative', top: '40px' }}>
          <CustomButton handleClick={handleSubmit(submitData)} label="Next" buttonType="contained" color="primary" />
          <CustomButton handleClick={handleBack} label="Back" buttonType="contained" color="secondary" />
        </ButtonContainer>
      </Card>
    </FadeContainer>
  );
}

export default StressInput;
