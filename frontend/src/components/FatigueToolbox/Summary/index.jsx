import React, { useContext } from 'react';
import CustomButton from '../../ToolboxComponents/Button/Button';
import Card from '../../ToolboxComponents/Card';
import { ButtonContainer, Title } from '../../ToolboxComponents/Card/style';
import SummaryTable from './SummaryTable';
import { FatigueContextDispatch } from '../context';

function Summary() {
  const faitgueDispatch = useContext(FatigueContextDispatch);

  const handleBack = () => {
    faitgueDispatch((prev) => ({
      ...prev, activeStep: 1,
    }));
  };
  return (
    <Card>
      <Title>
        Input data overview
      </Title>
      <SummaryTable />
      <ButtonContainer>
        <CustomButton label="Calculate" buttonType="contained" color="primary" />
        <CustomButton handleClick={handleBack} label="Back" buttonType="contained" color="secondary" />
      </ButtonContainer>
    </Card>
  );
}

export default Summary;
