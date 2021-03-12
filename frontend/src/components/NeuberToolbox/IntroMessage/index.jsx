import { Grow, Slide } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';
import { Container, Intro } from './style';
import { useRender } from './customHook';

function IntroMessage({ isValid }) {
  const showNext = useRender({
    isValid,
  });

  return (
    <Container>
      <Grow in={!showNext}>
        <Intro first>Define linear stress to start stress correction</Intro>
      </Grow>
      <Slide in={showNext} timeout={500}>
        <Intro>Input data</Intro>
      </Slide>
    </Container>
  );
}

export default IntroMessage;

IntroMessage.propTypes = {
  isValid: PropTypes.bool.isRequired,
};
