import React from 'react';
import { useForm, useWatch } from 'react-hook-form';

import { Fade } from '@material-ui/core';
import Card from '../ToolboxComponents/Card';
import { Container } from '../../style';
import { Title } from '../ToolboxComponents/Card/style';
import { FormContent, InputBlock } from './style';
import DropDown from '../ToolboxComponents/Dropdown';
import { TextBox } from '../ToolboxComponents/TextBox';
import { unitSystemItems } from './config';
import { validationRules } from './validators';
import IntroMessage from './IntroMessage';
// Data fetching

import { useDataFetch } from './dataFetch';
import Results from './Results';
import Spinner from './Spinner/Spinner';

const NeuberToolbox = () => {
  const {
    control, register, errors, handleSubmit, formState, trigger,
  } = useForm({
    mode: 'onChange',
    isValid: false,
    reValidateMode: 'onChange',
    defaultValues: {
      unitSystem: unitSystemItems[0].value,
      youngsModulus: 27000,
      yieldStrength: 130,
      osgoodExponent: 22,
      totalElongation: 0.1,
      linearStress: '',
    },
  });

  const {
    unitSystem,
    osgoodExponent,
    yieldStrength,
    youngsModulus,
    totalElongation,
    linearStress,
  } = useWatch({
    control,
  });

  const [results, state] = useDataFetch(handleSubmit, {
    unitSystem,
    osgoodExponent,
    yieldStrength,
    linearStress,
    youngsModulus,
    totalElongation,
  });

  return (
    <Container>

      <Card style={{ padding: '30px' }}>
        <InputBlock disabled={state.isRunning} style={{ width: '110%' }}>

          <Title style={{ width: '100%' }}>Select unit system</Title>

          <FormContent>
            <DropDown
              name="unitSystem"
              control={control}
              dropDownItems={unitSystemItems}
              handleChange={() => trigger(['youngsModulus', 'linearStress', 'yieldStrength'])}
            />

          </FormContent>

          <FormContent>
            <IntroMessage isValid={formState.isSubmitSuccessful} />
          </FormContent>
          <Fade in timeout={1000}>
            <FormContent flex style={{ justifyContent: 'space-between' }}>
              <TextBox
                name="youngsModulus"
                inputRef={register(
                  validationRules(
                    unitSystem === 'ksi' ? 16000 : 110316,
                    unitSystem === 'ksi' ? 40000 : 275790,
                  ),
                )}
                label={`Young's modulus,${unitSystem}`}
                error={errors.youngsModulus}
                disabled={state.isRunning}
              />
              <TextBox
                name="yieldStrength"
                inputRef={register(
                  validationRules(
                    unitSystem === 'ksi' ? 10 : 69,
                    unitSystem === 'ksi' ? 220 : 1700,
                  ),
                )}
                disabled={state.isRunning}
                label={`Yield strength,${unitSystem}`}
                error={errors.yieldStrength}
                width="150px"
              />

              <TextBox
                name="osgoodExponent"
                inputRef={register(validationRules(10, 30))}
                disabled={state.isRunning}
                label="Osgood exponent"
                error={errors.osgoodExponent}
                width="150px"
              />

              <TextBox
                name="linearStress"
                inputRef={register(
                  validationRules(yieldStrength, 5 * yieldStrength),
                )}
                label={`Linear stress,${unitSystem}`}
                error={errors.linearStress}
                disabled={state.isRunning}
                width="150px"
              />
              <TextBox
                name="totalElongation"
                inputRef={register(validationRules(0.002, 1))}
                label="Total elongation"
                error={errors.totalElongation}
                disabled={state.isRunning}
                width="150px"
              />
            </FormContent>
          </Fade>
        </InputBlock>
        <Spinner isRunning={state.isRunning} />
      </Card>
      <Results results={results} />
    </Container>
  );
};

export default NeuberToolbox;
