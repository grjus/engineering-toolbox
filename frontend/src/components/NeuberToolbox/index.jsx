import { Card } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
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
    unitSystem, osgoodExponent, yieldStrength, linearStress,
  } = watch();

  useEffect(() => {
    handleSubmit((data) => {
      console.log(osgoodExponent);
      console.log(data);
    })();
  }, [unitSystem, osgoodExponent, handleSubmit, linearStress]);

  return (
    <Container>
      <Card>
        <Title>Select unit system</Title>
        <FormContent>
          <DropDown name="unitSystem" control={control} dropDownItems={unitSystemItems} />
        </FormContent>
        <Title>
          Define Input data
        </Title>
        <FormContent>
          <TextBox name="youngsModulus" inputRef={register} label={`Young's modulus,${unitSystem}`} error={errors.unitSystem} />
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
