import React from 'react';
import MaterialData from './MaterialData';
import DataTable from './DataTable';
import Summary from './Summary';
import Results from './Results';

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
];

export default FatigueStructure;
