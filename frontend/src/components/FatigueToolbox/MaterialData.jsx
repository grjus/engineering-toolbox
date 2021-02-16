import React, { useContext } from 'react';
import Card from '../ToolboxComponents/Card';
import DropDown from '../ToolboxComponents/Dropdown';
import { Title } from '../ToolboxComponents/Card/style';
import { unitSystem } from './constants';
import { FatigueContext, FatigueContextDispatch } from './context';

function MaterialData() {
  const fatigueState = useContext(FatigueContext);
  const fatigueStateDispatch = useContext(FatigueContextDispatch);
  return (
    <Card>
      <Title>
        Select unit system
      </Title>
      <DropDown
        dropDownItems={unitSystem}
        value={fatigueState.unitSystem}
        handleChange={(event) => fatigueStateDispatch({
          ...fatigueState, unitSystem: event.target.value,
        })}
      />
    </Card>
  );
}

export default MaterialData;
