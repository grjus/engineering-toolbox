import React from 'react';
import { useForm, useWatch } from 'react-hook-form';
import Card from '../ToolboxComponents/Card';
import { Container } from '../../style';
import { Title } from '../ToolboxComponents/Card/style';
import { FormContent, InputBlock } from './style';
import DropDown from '../ToolboxComponents/Dropdown';
import { TextBox } from '../ToolboxComponents/TextBox';
import { unitSystemItems } from './config';
import { validationRules } from './validators';
// Data fetching

import { useDataFetch } from './dataFetch';
import Results from './Results';

const NeuberToolbox = () => {
  const {
    control, register, errors, handleSubmit, trigger,
  } = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
    defaultValues: {
      unitSystem: unitSystemItems[0].value,
      youngsModulus: 21000,
      yieldStrength: 120,
      osgoodExponent: 22,
      totalElongation: 0.1,
      linearStress: '',
    },

  });

  const {
    unitSystem, osgoodExponent, yieldStrength, youngsModulus, totalElongation, linearStress,
  } = useWatch({
    control,
  });

  const [results, state] = useDataFetch(handleSubmit, {
    unitSystem, osgoodExponent, yieldStrength, linearStress, youngsModulus, totalElongation,
  });

  console.log(state);

  return (
    <Container>
      <FormContent flex>
        <InputBlock disabled={state.isRunning}>
          <Card style={{ padding: '30px' }}>
            <Title>Select unit system</Title>
            <FormContent>
              <DropDown name="unitSystem" control={control} dropDownItems={unitSystemItems} handleChange={() => trigger(['youngsModulus', 'linearStress', 'yieldStrength'])} />
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
              <TextBox name="osgoodExponent" inputRef={register(validationRules(10, 30))} label="Osgood exponent" error={errors.osgoodExponent} />
            </FormContent>
            <FormContent>
              <TextBox
                name="linearStress"
                inputRef={register(validationRules(yieldStrength, 5 * yieldStrength))}
                label={`Linear stress,${unitSystem}`}
                error={errors.linearStress}
              />

            </FormContent>
            <FormContent>
              <TextBox
                name="totalElongation"
                inputRef={register(validationRules(0.002, 1))}
                label="Total elongation"
                error={errors.totalElongation}
              />
            </FormContent>
          </Card>
        </InputBlock>
        <Results results={results} />

      </FormContent>

    </Container>
  );
};

export default NeuberToolbox;
