import React, { useContext } from 'react';
import { FatigueContext } from '../context';
import {
  Content, Label, List, ListItem,
} from './styles';

const SummaryTable = () => {
  const fatigueState = useContext(FatigueContext);
  const {
    unitSystem,
    ultimateStrength,
    isSrufaceFactor,
    isLoadFactor,
    isRelFactor,
    ifCustomFactor,
    surtfaceFinishFactor,
    loadFactor,
    relFactor,
    customFactor,
    fatigueTheory,
    yieldStrength,
    excelData,
  } = fatigueState;

  const data = [
    {
      label: 'Unit system',
      status: true,
      value: unitSystem,
    },
    {
      label: 'Ultimate strenght',
      status: true,
      value: ultimateStrength,
    },
    {
      label: 'Yield strenght',
      status: fatigueTheory === 'SODERBERG',
      value: yieldStrength,
    },

    {
      label: 'Surface finish',
      status: isSrufaceFactor,
      value: surtfaceFinishFactor,
    },
    {
      label: 'Load type',
      status: isLoadFactor,
      value: loadFactor,
    },
    {
      label: 'Reliability  level',
      status: isRelFactor,
      value: relFactor,
    },
    {
      label: 'Miscellaneous factor',
      status: ifCustomFactor,
      value: customFactor,
    },
    {
      label: 'No of stress points',
      status: true,
      value: excelData.length,
    },
    {
      label: 'Fatigue model',
      status: true,
      value: fatigueTheory,
    },
  ];

  return (

    <List>
      {data.map((each) => (
        <ListItem key={each.value}>
          <Label>{each.label}</Label>
          <Content>{each.status ? each.value : 'n/a'}</Content>
        </ListItem>
      ))}

    </List>
  );
};

export default SummaryTable;
