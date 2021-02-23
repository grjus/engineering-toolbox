import React from 'react';
import DataTable from './StressInput';
import MaterialData from './MaterialData';
import Summary from './Summary';
import Results from './Results';
import Report from './Report';

const FatigueStructure = [
  {
    component: <MaterialData />,
    name: 'Material Data',
    key: 'fatigue-app-1',
  },
  {
    component: <DataTable />,
    name: 'Stress input',
    key: 'fatigue-app-2',
  },
  {
    component: <Summary />,
    name: 'Summary',
    key: 'fatigue-app-3',
  },
  {
    component: <Results />,
    name: 'Results',
    key: 'fatigue-app-4',
  },
  {
    component: <Report />,
    name: 'Report',
    key: 'fatigue-app-5',
  },
];

export default FatigueStructure;
