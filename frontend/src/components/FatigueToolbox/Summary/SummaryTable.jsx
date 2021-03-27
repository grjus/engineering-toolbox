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
    surfaceFactor,
    loadFactor,
    reliabilityFactor,
    userDefinedFactor,
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
      status: surfaceFactor.isrequired,
      value: surfaceFactor.value,
    },
    {
      label: 'Load type',
      status: loadFactor.isrequired,
      value: loadFactor.value,
    },
    {
      label: 'Reliability  level',
      status: reliabilityFactor.isrequired,
      value: reliabilityFactor.value,
    },
    {
      label: 'Miscellaneous factor',
      status: userDefinedFactor.isrequired,
      value: userDefinedFactor.value,
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
        <ListItem key={each.label}>
          <Label>{each.label}</Label>
          <Content>{each.status ? each.value : 'n/a'}</Content>
        </ListItem>
      ))}

    </List>
  );
};

export default SummaryTable;
