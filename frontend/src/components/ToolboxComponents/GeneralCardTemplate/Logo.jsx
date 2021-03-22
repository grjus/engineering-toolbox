import React from 'react';
import LogoComponent from '../LogoIcon';
import { Logo, LogoFooter, LogoTitle } from './style';

function AboutLogo() {
  return (
    <>
      <Logo>
        <LogoTitle>EngineeringToolbox</LogoTitle>
        <LogoComponent rotValue icoSize="large" margintop="26px" />
      </Logo>
      <LogoFooter>Design by engineer, for engineers</LogoFooter>
    </>
  );
}

export default AboutLogo;
