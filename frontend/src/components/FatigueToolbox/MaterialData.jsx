import React from 'react';
import { useForm } from 'react-hook-form';
import Card from '../ToolboxComponents/Card';
import DropDown from '../ToolboxComponents/Dropdown';
import { ButtonContainer, FormContent, Title } from '../ToolboxComponents/Card/style';
import {
  unitSystem, modFac, surfaceFinish, loadFactor, relFactor,
} from './constants';
import { TextBox } from '../ToolboxComponents/TextBox';
import CustomCheckbox from '../ToolboxComponents/Checkbox';
import { DropdownContainer } from './styles';
import CustomButton from '../ToolboxComponents/Button/Button';
// import { FatigueContext } from './context';

function MaterialData() {
  // const fatigueState = useContext(FatigueContext);
  // const fatigueStateDispatch = useContext(FatigueContextDispatch);

  const {
    control, watch, register, handleSubmit,
  } = useForm({
    defaultValues: {
      unitSystem: 'MPa',
      ultimateStrength: 150,
      isSrufaceFactor: false,
      isLoadFactor: false,
      isRelFactor: false,
      ifCustomFactor: false,
      surtfaceFinishFactor: surfaceFinish[0].value,
      loadFactor: loadFactor[0].value,
      relFactor: relFactor[0].value,
    },
  });

  const {
    isSrufaceFactor, isLoadFactor, isRelFactor, ifCustomFactor, unitSystem: unitSystemWatch,
  } = watch();

  const submitData = (data) => console.log(data);

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
        <FormContent>
          {modFac.map((item) => <CustomCheckbox key={item.value} name={item.value} control={control} label={item.label} />)}
        </FormContent>
        <DropdownContainer>
          {isSrufaceFactor ? <DropDown control={control} name="surtfaceFinishFactor" dropDownItems={surfaceFinish} /> : null}
          {isLoadFactor ? <DropDown control={control} name="loadFactor" dropDownItems={loadFactor} /> : null}
          {isRelFactor ? <DropDown control={control} name="relFactor" dropDownItems={relFactor} /> : null}

        </DropdownContainer>

      </FormContent>
      <FormContent>
        {ifCustomFactor ? <TextBox name="customFactor" inputRef={register} label="User defined factor" /> : null}
      </FormContent>
      <ButtonContainer>
        <CustomButton handleClick={handleSubmit(submitData)} label="Next" buttonType="contained" color="primary" />
      </ButtonContainer>
    </Card>
  );
}

export default MaterialData;
