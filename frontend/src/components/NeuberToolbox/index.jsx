import React from 'react';
import { useForm, useWatch } from 'react-hook-form';

import { Divider, Fade } from '@material-ui/core';
import Card from '../ToolboxComponents/Card';
import { Container } from '../../style';
import {
  FormContent, InputBlock, OpacityBlock, Header, FormRow,
} from './style';
import DropDown from '../ToolboxComponents/Dropdown';
import { FadeTextBox } from '../ToolboxComponents/TextBox';
import { unitSystemItems } from './config';
import { validationRules } from './validators';
// Data fetching

import { useDataFetch } from './dataFetch';
import Results from './Results';
import Spinner from './Spinner/Spinner';
import IntroMessage from './IntroMessage';
import { FadeContainer } from '../ToolboxComponents/FadeContainer/FadeContainer';

const NeuberToolbox = () => {
  const {
    control, register, errors, handleSubmit, trigger,
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
      <Spinner isRunning={state.isRunning} />
      <OpacityBlock disabled={state.isRunning}>

        <Card style={{ padding: '30px' }}>

          <InputBlock style={{ width: '110%' }}>
            <IntroMessage visible={results.isInit} />
            <Fade in={!results.isInit}>
              <span>
                <Header noOffset>Select unit system</Header>
                <FormContent>
                  <DropDown
                    name="unitSystem"
                    control={control}
                    dropDownItems={unitSystemItems}
                    handleChange={() => trigger(['youngsModulus', 'linearStress', 'yieldStrength'])}
                  />

                </FormContent>
              </span>
            </Fade>
            <FormContent>
              <Header noOffset>Input data</Header>
            </FormContent>
            <FormContent flex style={{ justifyContent: 'space-between' }}>
              <FormRow>

                <FadeTextBox
                  name="linearStress"
                  inputRef={register(
                    validationRules(yieldStrength, 5 * yieldStrength),
                  )}
                  label={`Linear stress,${unitSystem}`}
                  error={errors.linearStress}
                  disabled={state.isRunning}
                  width="150px"
                  labelWidth="150px"
                />

                <span style={{ alignSelf: 'start' }}>
                  <FadeTextBox
                    visible={!results.isInit}
                    labelWidth="200px"
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
                </span>
              </FormRow>
              <FormRow>
                <FadeTextBox
                  visible={!results.isInit}
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
                  labelWidth="150px"
                />

                <FadeTextBox
                  visible={!results.isInit}
                  name="osgoodExponent"
                  inputRef={register(validationRules(10, 30))}
                  disabled={state.isRunning}
                  label="Osgood exponent"
                  error={errors.osgoodExponent}
                  width="150px"
                  labelWidth="200px"
                />
              </FormRow>
              <FormRow>
                <FadeTextBox
                  visible={!results.isInit}
                  name="totalElongation"
                  inputRef={register(validationRules(0.002, 1))}
                  label="Total elongation"
                  error={errors.totalElongation}
                  disabled={state.isRunning}
                  width="150px"
                  labelWidth="150px"
                />
              </FormRow>
            </FormContent>
          </InputBlock>
          <FadeContainer condition={!results.isInit} timeout={1000}>
            <Divider />
          </FadeContainer>
        </Card>
        {!results.isInit ? <Results results={results} isRunning={state.isRunning} /> : null}

      </OpacityBlock>
    </Container>
  );
};

export default NeuberToolbox;
