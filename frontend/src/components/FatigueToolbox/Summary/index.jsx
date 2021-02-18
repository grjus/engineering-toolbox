import React, { useContext } from 'react';
import CustomButton from '../../ToolboxComponents/Button/Button';
import Card from '../../ToolboxComponents/Card';
import { ButtonContainer, Title } from '../../ToolboxComponents/Card/style';
import SummaryTable from './SummaryTable';
import { FatigueContextDispatch, FatigueContext } from '../context';
import { prepareDataToApi } from './handlers';
import fastApi from '../../Api';

function Summary() {
  const faitgueDispatch = useContext(FatigueContextDispatch);
  const fatigueState = useContext(FatigueContext);

  const handleBack = () => {
    faitgueDispatch((prev) => ({
      ...prev, activeStep: 1,
    }));
  };

  const handleSubmit = () => {
    const data = prepareDataToApi(fatigueState);
    fastApi.post('api/calculations/fatigue/', JSON.stringify(data)).catch((error) => {
      if (error.response.status === 422) {
        error.response.data.detail.forEach((element) => {
          console.log(element.msg);
        });
      }
    }).then((response) => console.log(response.data));
    // console.log(response.data);
  };

  return (
    <Card>
      <Title>
        Input data overview
      </Title>
      <SummaryTable />
      <ButtonContainer>
        <CustomButton handleClick={handleSubmit} label="Calculate" buttonType="contained" color="primary" />
        <CustomButton handleClick={handleBack} label="Back" buttonType="contained" color="secondary" />
      </ButtonContainer>
    </Card>
  );
}

export default Summary;
