import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Card from '../ToolboxComponents/Card';
import { Container } from '../../style';
import { FormContent, Title } from '../ToolboxComponents/Card/style';
import DropDown from '../ToolboxComponents/Dropdown';
import { TextBox } from '../ToolboxComponents/TextBox';
import { unitSystemItems } from './config';

import { roValRules, minLinearStress } from './validators';

const NeuberToolbox = () => {
  const {
    control, register, watch, errors, handleSubmit,
  } = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
    defaultValues: {
      unitSystem: unitSystemItems[0].value,
      youngsModulus: 21000,
      yieldStrength: 120,
      osgoodExponent: 22,
      linearStress: 150,
    },

  });

  const {
    unitSystem, osgoodExponent, yieldStrength, linearStress, youngsModulus,
  } = watch();

  useEffect(() => {
    handleSubmit((data) => {
      console.log(data);
    })();
  }, [unitSystem, osgoodExponent, handleSubmit, linearStress, youngsModulus]);

  return (
    <Container>
      <Card style={{ padding: '30px' }}>
        <Title>Select unit system</Title>
        <FormContent>
          <DropDown name="unitSystem" control={control} dropDownItems={unitSystemItems} />
        </FormContent>
        <Title>
          Define Input data
        </Title>
        <FormContent>
          <TextBox
            name="youngsModulus"
            inputRef={register({
              required: { value: true, message: 'Value is required' },
              min: { value: unitSystem === 'ksi' ? 16000 : 110316, message: 'Value out or range' },
              max: { value: unitSystem === 'ksi' ? 50000 : 344737, message: 'Value out or range' },
            })}
            label={`Young's modulus,${unitSystem}`}
            error={errors.youngsModulus}
          />
        </FormContent>
        <FormContent>
          <TextBox name="yieldStrength" inputRef={register} label={`Yield strength,${unitSystem}`} error={errors.unitSystem} />
        </FormContent>
        <FormContent>
          <TextBox name="osgoodExponent" inputRef={register(roValRules)} label="Osgood exponent" error={errors.unitSystem} />
        </FormContent>
        <FormContent>
          <TextBox
            name="linearStress"
            inputRef={register({
              ...minLinearStress,
              max: { value: 3 * parseFloat(yieldStrength), message: 'To high linear stress' },
              min: { value: parseFloat(yieldStrength), message: 'Lienar elastic stress' },
            })}
            label={`Linear stress,${unitSystem}`}
            error={errors.minLinearStress}
          />
        </FormContent>
      </Card>
    </Container>
  );
};

export default NeuberToolbox;
