import React, { useEffect, useReducer } from 'react';

import { useForm } from 'react-hook-form';
import Card from '../ToolboxComponents/Card';
import { Container } from '../../style';
import { Title } from '../ToolboxComponents/Card/style';
import { FormContent } from './style';
import DropDown from '../ToolboxComponents/Dropdown';
import { TextBox } from '../ToolboxComponents/TextBox';
import { unitSystemItems } from './config';
import { initialState, actionType, dataSubmitReducer } from '../Reducers';

import { validationRules } from './validators';

const NeuberToolbox = () => {
  const {
    control, register, watch, errors, handleSubmit, trigger,
  } = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
    defaultValues: {
      unitSystem: unitSystemItems[0].value,
      youngsModulus: 21000,
      yieldStrength: 120,
      osgoodExponent: 22,
      linearStress: 150,
      totalElongation: 0.1,
    },

  });

  const [state, dispatch] = useReducer(dataSubmitReducer, initialState);

  const {
    unitSystem, osgoodExponent, yieldStrength, linearStress, youngsModulus, totalElongation,
  } = watch();

  useEffect(() => {
    handleSubmit((data) => {
      dispatch({ type: actionType.SUBMIT });
      fastApi.post('api/calculations/fatigue/', JSON.stringify(data)).then((response) => {
        faitgueDispatch((prev) => {
          dispatch({ type: actionType.SUCCESS });
          return {
            ...prev,
            results: response.data,
            activeStep: 3,
          };
        });
      }).catch((error) => {
        if (!error.response) {
          dispatch({ type: actionType.FAIL, payload: 'Error in connection to Python API' });
        } else if (error.response.status === 422) {
          error.response.data.detail.forEach((element) => {
            dispatch({ type: actionType.FAIL, payload: element.msg });
          });
        } else {
          dispatch({ type: actionType.FAIL, payload: 'Analysis error. Review your input data' });
        }
      });
    })();
  }, [unitSystem, osgoodExponent, handleSubmit, linearStress, youngsModulus, yieldStrength, totalElongation]);

  return (
    <Container>
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
    </Container>
  );
};

export default NeuberToolbox;
