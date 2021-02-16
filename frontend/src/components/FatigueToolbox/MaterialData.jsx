import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Card from '../ToolboxComponents/Card';
import DropDown from '../ToolboxComponents/Dropdown';
import { FormContent, Title } from '../ToolboxComponents/Card/style';
import { unitSystem, modFac } from './constants';
import { TextBox } from '../ToolboxComponents/TextBox';
import CustomCheckbox from '../ToolboxComponents/Checkbox';
// import { FatigueContext } from './context';

function MaterialData() {
  // const fatigueState = useContext(FatigueContext);
  // const fatigueStateDispatch = useContext(FatigueContextDispatch);

  const { control, watch, register } = useForm({
    defaultValues: {
      unitSystem: 'MPa',
      ultimateStrength: 150,
      isSrufaceFactor: false,
      isLoadFactor: false,
      isRelFactor: false,
      ifCustomFactor: false,
    },
  });

  const unitSystemWatch = watch('unitSystem');

  useEffect(() => {
    console.log(unitSystemWatch);
  }, [unitSystemWatch]);

  return (
    <Card>
      <Title>
        Select stress unit system
      </Title>
      <FormContent>
        <DropDown control={control} name="unitSystem" dropDownItems={unitSystem} />
      </FormContent>
      <Title>Specify material ultimate strength</Title>
      <FormContent>
        <TextBox name="ultimateStrength" inputRef={register} label={`Ultimate strength, ${unitSystemWatch}`} />
      </FormContent>
      <Title>Define material modification factors</Title>
      <FormContent flex>
        <FormContent flex>
          {modFac.map((i) => <CustomCheckbox key={i.value} name={i.value} control={control} label={i.label} />)}
        </FormContent>

      </FormContent>
    </Card>
  );
}

export default MaterialData;
