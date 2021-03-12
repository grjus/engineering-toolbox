import { Fade } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';
import { Container, Title, Message } from './style';

function IntroMessage({ visible }) {
  return (
    <Fade in={visible} unmountOnExit timeout={200}>
      <Container>
        <Title>Welcome to Stress Correction App</Title>
        <Message>To begin, please define linear stress value in input data section</Message>
      </Container>
    </Fade>
  );
}

export default IntroMessage;

IntroMessage.propTypes = {
  visible: PropTypes.bool.isRequired,
};
