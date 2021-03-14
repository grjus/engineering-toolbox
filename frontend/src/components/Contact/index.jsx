import React, { useState, useReducer } from 'react';
import { useForm } from 'react-hook-form';
import { Fade } from '@material-ui/core';
import Card from '../ToolboxComponents/Card';
import { FormContent, ButtonContainer } from '../ToolboxComponents/Card/style';
import CustomButton from '../ToolboxComponents/Button/Button';
import { TextBox } from '../ToolboxComponents/TextBox';
import { Container } from '../../style';
import { initialState, actionType, dataSubmitReducer } from '../Reducers/index';
import fastApi from '../Api/index';
import { ConfirmMessage } from './style';
import CustomSpinner from '../ToolboxComponents/Spinner';

function Contact() {
  const [state, dispatch] = useReducer(dataSubmitReducer, initialState);
  const [confirm, setConfirm] = useState('');

  const {
    register, errors, handleSubmit, reset,
  } = useForm({
    defaultValues: {
      email: '',
      subject: '',
      message: '',
    },
  });

  const sendMessage = (data) => {
    dispatch({ type: actionType.SUBMIT });
    fastApi.post('/api/contact', JSON.stringify(data)).then((response) => {
      setConfirm(response.data.detail);
      dispatch({ type: actionType.SUCCESS });
      reset();
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
  };

  return (
    <Container>
      <Card>

        <FormContent>
          <TextBox
            name="email"
            inputRef={register({
              required: {
                value: true,
                message: 'Email adress is required',
              },
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'invalid email address',
              },
            })}
            label="Your email adress"
            error={errors.email}
            fieldType="text"
            width="400px"
            disabled={state.isRunning}
          />
        </FormContent>
        <FormContent>
          <TextBox
            name="subject"
            inputRef={register({
              required: {
                value: true,
                message: 'Subject is required',
              },
              maxLength: {
                value: 100,
                message: 'Max numbers of chars is limited to 10',
              },
            })}
            label="Subject"
            error={errors.subject}
            fieldType="text"
            width="400px"
            disabled={state.isRunning}
          />
        </FormContent>
        <FormContent>
          <TextBox
            name="message"
            inputRef={register({
              required: {
                value: true,
                message: 'Message is required',
              },
              maxLength: {
                value: 1000,
                message: 'Max numbers of chars is limited to 10',
              },
            })}
            label="Message"
            error={errors.message}
            multiline
            fieldType="text"
            width="800px"
            disabled={state.isRunning}
          />
          <Fade timeout={500} in={confirm !== ''}>
            <>
              <ConfirmMessage>{confirm}</ConfirmMessage>
            </>
          </Fade>
        </FormContent>
        <ButtonContainer style={{ padding: '20px 0px 20px 10px' }}>
          <CustomButton handleClick={handleSubmit(sendMessage)} label={state.isRunning ? 'SUBMITTING' : 'SUBMIT'} buttonType="contained" color="primary" disabled={state.isRunning} />
          {state.isRunning ? <CustomSpinner marginTop="6px" /> : null}
        </ButtonContainer>

      </Card>
    </Container>
  );
}

export default Contact;
