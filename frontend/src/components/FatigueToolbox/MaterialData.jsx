import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import Card from '../ToolboxComponents/Card';
import DropDown from '../ToolboxComponents/Dropdown';
import { FormContent, Title } from '../ToolboxComponents/Card/style';
import { unitSystem } from './constants';
import { FatigueContext, FatigueContextDispatch } from './context';

function MaterialData() {
  const fatigueState = useContext(FatigueContext);
  const fatigueStateDispatch = useContext(FatigueContextDispatch);

  const { handleSubmit, errors, register } = useForm({
    defaultValues: {
      unitSystem: fatigueState.unitSystem,
    },
  });
  return (
    <Card>
      <Title>
        Select stress unit system
      </Title>
      <FormContent>
        <DropDown
          dropDownItems={unitSystem}
          value={fatigueState.unitSystem}
          handleChange={(event) => fatigueStateDispatch({
            ...fatigueState, unitSystem: event.target.value,
          })}
        />
      </FormContent>
      <Title>Specify material ultimate strength</Title>
      <FormContent />
    </Card>
  );
}

export default MaterialData;
