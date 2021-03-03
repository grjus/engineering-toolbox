import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Card from '../ToolboxComponents/Card';
import { Container } from '../../style';
import { FormContent, Title } from '../ToolboxComponents/Card/style';
import DropDown from '../ToolboxComponents/Dropdown';
import { TextBox } from '../ToolboxComponents/TextBox';
import { unitSystemItems } from './config';

import { validationRules } from './validators';

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
  }, [unitSystem, osgoodExponent, handleSubmit, linearStress, youngsModulus, yieldStrength]);

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
            inputRef={register(validationRules(unitSystem === 'ksi' ? 16000 : 110316, unitSystem === 'ksi' ? 40000 : 275790))}
            label={`Young's modulus,${unitSystem}`}
            error={errors.youngsModulus}
          />
        </FormContent>
        <FormContent>
          <TextBox name="yieldStrength" inputRef={register(validationRules(unitSystem === 'ksi' ? 10 : 69, unitSystem === 'ksi' ? 220 : 1700))} label={`Yield strength,${unitSystem}`} error={errors.yieldStrength} />
        </FormContent>
        <FormContent>
          <TextBox name="osgoodExponent" inputRef={register(validationRules(15, 30))} label="Osgood exponent" error={errors.osgoodExponent} />
        </FormContent>
        <FormContent>
          <TextBox
            name="linearStress"
            inputRef={register(validationRules(yieldStrength, 4 * yieldStrength))}
            label={`Linear stress,${unitSystem}`}
            error={errors.linearStress}
          />
        </FormContent>
      </Card>
    </Container>
  );
};

export default NeuberToolbox;
