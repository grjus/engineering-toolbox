import React, { useState, useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Card from '../../ToolboxComponents/Card';
import { Title, FormContent, ButtonContainer } from '../../ToolboxComponents/Card/style';
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

function Results() {
  const fatigueState = useContext(FatigueContext);
  const { chartData, excelData } = fatigueState.results;
  const { derated, raw } = chartData;
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

  const chartDataInfo = {
    datasets: [{
      label: 'Underated curve',
      type: 'line',
      backgroundColor: 'blue',
      pointRadius: 1,
      borderWidth: 1.5,
      borderColor: 'black',
      fill: false,
      data: raw.cycles.map((cycle, idx) => ({
        x: cycle,
        y: raw.stress[idx],
      })),
    },
    {
      label: 'Derated curve',
      backgroundColor: 'red',
      pointRadius: 1,
      borderColor: 'green',
      fill: false,
      data: derated.cycles.map((cycle, idx) => ({
        x: cycle,
        y: derated.stress[idx],
      })),

    },
    {
      label: 'Analysis data',
      backgroundColor: 'brown',
      pointRadius: 3,
      borderColor: 'orange',
      fill: false,
      data: (() => {
        const data = [];
        for (let item = 0; item.length; item++) {
          data.push({
            x: excelData[item][7],
            y: excelData[item][6],
          });
        }
        return data;
      })(),

    },
    ],
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
      <ChartFatigue chartData={chartDataInfo} />
      <ButtonContainer>
        <CustomButton handleClick={handleBack} label="Back" color="secondary" buttonType="contained" />
      </ButtonContainer>

    </Card>
  );
}

export default Results;
