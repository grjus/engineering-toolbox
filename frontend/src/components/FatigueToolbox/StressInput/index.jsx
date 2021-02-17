import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import Card from '../../ToolboxComponents/Card';
import {
  ButtonContainer, ErrorMessage, FormContent, Title,
} from '../../ToolboxComponents/Card/style';
import CustomButton from '../../ToolboxComponents/Button/Button';
import DataTable from '../../ToolboxComponents/JExcel';
import { FatigueContextDispatch, FatigueContext } from '../context';
import { handleExcelOptions, tableHeaders } from './config';
import { fatigueTheoryItems } from './constants';
import { TableHeaders } from './TableHeaders';
import { TableButtonContainer } from './style';
import { addRow, deleteRow, saveSpreadsheet } from './jexcelHelpers';
import DropDown from '../../ToolboxComponents/Dropdown';
import { TextBox } from '../../ToolboxComponents/TextBox';

function StressInput() {
  const fatigueStateDispatch = useContext(FatigueContextDispatch);
  const fatigueState = useContext(FatigueContext);
  const [dataTable, setDataTable] = useState(null);
  const { control, watch, register } = useForm({
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

  const submitData = () => {
    console.log(dataTable);
  };

  return (
    <Card>
      <Title>Specify stress values</Title>
      <FormContent flex>
        <FormContent>
          <TableButtonContainer>
            <CustomButton handleClick={() => addRow(dataTable)} label="Add row" buttonType="outlined" color="primary" />
            <CustomButton handleClick={() => deleteRow(dataTable)} label="Delete row" buttonType="outlined" color="primary" />
            <CustomButton handleClick={() => saveSpreadsheet(dataTable)} label="Save data" buttonType="outlined" color="primary" />
          </TableButtonContainer>
          <TableHeaders headersList={tableHeaders} unit={fatigueState.unitSystem} />
          <DataTable options={handleExcelOptions()} handleSheet={setDataTable} />
        </FormContent>
      </FormContent>
      <ErrorMessage>{fatigueState.excelError}</ErrorMessage>
      <FormContent>
        <Title>Select fatigue theory</Title>
        <DropDown name="fatigueTheory" control={control} dropDownItems={fatigueTheoryItems} />
      </FormContent>
      <FormContent style={{ marginTop: '20px' }}>
        {fatigueTheory === 'SODERBERG' ? <TextBox name="yieldStrength" inputRef={register} label={`Yield strength,${fatigueState.unitSystem}`} /> : null}
      </FormContent>

      <ButtonContainer>
        <CustomButton handleClick={submitData} label="Next" buttonType="contained" color="primary" />
        <CustomButton handleClick={handleBack} label="Back" buttonType="contained" color="secondary" />
      </ButtonContainer>
    </Card>
  );
}

StressInput.propTypes = {

};

export default StressInput;
