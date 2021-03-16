import React, {
  useState, useContext, useEffect, useRef,
} from 'react';
import { useForm } from 'react-hook-form';
import Card from '../../ToolboxComponents/Card';
import {
  Title, FormContent, ButtonContainer,
} from '../../ToolboxComponents/Card/style';
import DropDown from '../../ToolboxComponents/Dropdown';
import { unitSystemItems } from '../MaterialData/constants';
import { TableHeaders } from '../StressInput/TableHeaders';
import DataTable from '../../ToolboxComponents/JExcel';
import {
  tableHeaders, jexcelConfig, EXCEL_COLUMN_WIDTH,
} from './config';
import { FatigueContext, FatigueContextDispatch } from '../context';
import CustomButton from '../../ToolboxComponents/Button/Button';
import ChartFatigue from './ChartFatigue';
import { dataConversion } from './dataConversion';
import { formatJExcelTable } from './jexcelHelpers';
import ToastHelper from '../../ToolboxComponents/Toast';
import Helper from './toast/Helper';
import { FadeContainer } from '../../ToolboxComponents/FadeContainer/FadeContainer';

function Results() {
  const fatigueState = useContext(FatigueContext);
  const chartRef = useRef(null);

  const fatigueStateDispatch = useContext(FatigueContextDispatch);
  const [dataTable, setDataTable] = useState(null);
  const [hideToast, setHideToast] = useState(false);
  const { control, watch } = useForm({
    defaultValues: {
      unitSystem: unitSystemItems[0].name,
    },
  });
  const unit = watch('unitSystem');

  useEffect(() => {
    if (dataTable !== null) {
      dataTable.setData(fatigueState.results.excelData);
      formatJExcelTable(dataTable, fatigueState.results.excelData);
    }
  });

  const handleChange = (e) => {
    const results = dataConversion(fatigueState.results, e.target.value);
    fatigueStateDispatch((prev) => ({
      ...prev,
      results: {
        ...prev.results, ...results,
      },
    }));
  };

  const handleBack = () => {
    setHideToast(true);
    fatigueStateDispatch((prev) => ({
      ...prev, activeStep: 2,
    }));
  };

  const handleNext = () => {
    fatigueStateDispatch((prev) => ({
      ...prev,
      activeStep: 4,
      report: {
        chart: chartRef.current,
        unit,
      },
    }));
  };

  return (
    <FadeContainer condition timeout={500}>
      <Card>
        <ToastHelper helperComponent={<Helper />} toastStatus={hideToast} />
        <Title>
          Select stress unit system
        </Title>
        <FormContent>
          <DropDown control={control} name="unitSystem" dropDownItems={unitSystemItems} handleChange={handleChange} />
        </FormContent>
        <Title>Stress results</Title>
        <FormContent>
          <TableHeaders headersList={tableHeaders} unit={unit} colWidth={EXCEL_COLUMN_WIDTH} />
          <DataTable options={jexcelConfig} handleSheet={setDataTable} />
        </FormContent>
        <Title>Stress data</Title>
        <ChartFatigue unit={unit} chartRef={chartRef} />

        <ButtonContainer>
          <CustomButton handleClick={handleNext} label="Next" color="primary" buttonType="contained" />
          <CustomButton handleClick={handleBack} label="Back" color="secondary" buttonType="contained" />
        </ButtonContainer>

      </Card>
    </FadeContainer>
  );
}

export default Results;
