import React from 'react';
import Card from '../ToolboxComponents/Card';
import DropDown from '../ToolboxComponents/Dropdown';
import { Title } from '../ToolboxComponents/Card/style';
import { unitSystem } from './constants';

function MaterialData() {
  return (
    <Card>
      <Title>
        Select unit system
      </Title>
      <DropDown dropDownItems={unitSystem} />
    </Card>
  );
}

export default MaterialData;
