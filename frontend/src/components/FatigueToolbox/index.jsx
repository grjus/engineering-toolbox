import React, { useState } from 'react';
// Import application components

import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Typography from '@material-ui/core/Typography';
import { MuiThemeProvider } from '@material-ui/core';
import FatigueStructure from './config';
import { Container } from '../../style';
import { StepperTheme } from './styles';

export default function FatigueToolbox() {
  const [activeStep] = useState(0);

  // const handleNextStep = () => {
  //   setActiveStep((prev) => prev + 1);
  // };

  return (
    <Container>

      <MuiThemeProvider theme={StepperTheme}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {FatigueStructure.map((items) => (
            <Step key={items.key}>
              <StepLabel>{items.name}</StepLabel>
              <StepContent>
                <Typography component="div">
                  {items.component}
                </Typography>
              </StepContent>
            </Step>
          ))}
        </Stepper>
      </MuiThemeProvider>
    </Container>
  );
}
