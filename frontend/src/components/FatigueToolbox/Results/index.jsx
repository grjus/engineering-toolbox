import React, {
  useState, useContext, useEffect, useRef,
} from 'react';
import { useForm } from 'react-hook-form';
import Card from '../../ToolboxComponents/Card';
import {
  Title, FormContent, ButtonContainer, ErrorMessage,
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
import { Content, Label, SummaryContainer } from './styles';
import { formatJExcelTable } from './jexcelHelpers';
import ToastHelper from '../../ToolboxComponents/Toast';
import Helper from './toast/Helper';
import { fatReport } from '../Report/Report';

function Results() {
  const fatigueState = useContext(FatigueContext);
  const { summary } = fatigueState.results;
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

  const handleReport = () => {
    const report = fatReport('Ala', 'Maj', 'none', 'some', fatigueState);

    report.addSummarySection();
    report.addChart(chartRef.current, 'Fatigue curve');
    report.addfatigueTable(unit);
    report.addDocumentLayout();
    // report.fatigueTable(fatigueState.results.excelData, unit);
    report.saveDoc();
  };

  return (
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
      <Title style={{ fontWeight: 'bold' }}>Analysis summary</Title>
      <FormContent>
        <SummaryContainer>
          <Label>Total damage</Label>
          <Content danger={summary.totalDamage > 1}>{summary.totalDamage.toFixed(3)}</Content>
        </SummaryContainer>
        <SummaryContainer>
          <Label>Effective mod factor</Label>
          <Content>
            {summary.modificationFactor.toFixed(3)}
          </Content>
        </SummaryContainer>
        {summary.totalDamage > 1 ? <ErrorMessage>Damage above 1. Consider design modification</ErrorMessage> : null}
      </FormContent>
      <ButtonContainer>
        <CustomButton handleClick={handleReport} label="Report" color="primary" buttonType="contained" />
        <CustomButton handleClick={handleBack} label="Back" color="secondary" buttonType="contained" />
      </ButtonContainer>

    </Card>
  );
}

export default Results;
