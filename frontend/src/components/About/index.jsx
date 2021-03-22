import React, { useState } from 'react';
import { Container } from '../../style';
import AboutLogo from './Logo';

const About = () => {
  const [state] = useState(null);

  return (
    <Container>
      <AboutLogo />
      {state}
    </Container>
  );
};

export default About;
