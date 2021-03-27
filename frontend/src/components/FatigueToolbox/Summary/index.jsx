import React, { useContext, useReducer, useState } from 'react';
import CustomButton from '../../ToolboxComponents/Button/Button';
import Card from '../../ToolboxComponents/Card';
import {
  ButtonContainer, ErrorMessage, FormContent, Title,
} from '../../ToolboxComponents/Card/style';
import SummaryTable from './SummaryTable';
import { FatigueContextDispatch, FatigueContext } from '../context';
import { prepareDataToApi } from './handlers';
import fastApi from '../../Api';
import { initialState, dataSubmitReducer, actionType } from '../../Reducers';
import CustomSpinner from '../../ToolboxComponents/Spinner';
import { SpinnerContainer } from './styles';
import Helper from './toast/Helper';
import ToastHelper from '../../ToolboxComponents/Toast';

function Summary() {
  const faitgueDispatch = useContext(FatigueContextDispatch);
  const fatigueState = useContext(FatigueContext);
  const [hideToast, setHideToast] = useState(false);
  const [state, dispatch] = useReducer(dataSubmitReducer, initialState);

  const handleBack = () => {
    setHideToast(true);
    faitgueDispatch((prev) => ({
      ...prev, activeStep: 1,
    }));
  };

  const handleSubmit = () => {
    setHideToast(true);
    const data = prepareDataToApi(fatigueState);
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
  };

  return (
    <Card>
      <ToastHelper toastStatus={hideToast} helperComponent={<Helper />} />
      <Title>
        Input data overview
      </Title>
      <SummaryTable />
      <FormContent>
        {state.errorMessage ? state.errorMessage.map((item) => <ErrorMessage key={`error-${item}`}>{`Error:${item}`}</ErrorMessage>) : null}
      </FormContent>
      <SpinnerContainer>
        <ButtonContainer>
          <CustomButton handleClick={handleSubmit} label="Calculate" buttonType="contained" color="primary" disabled={state.isRunning} />
          <CustomButton handleClick={handleBack} label="Back" buttonType="contained" color="secondary" disabled={state.isRunning} />
        </ButtonContainer>
        {state.isRunning ? <CustomSpinner /> : null}
      </SpinnerContainer>

    </Card>
  );
}

export default Summary;
