import React from 'react';
import PropTypes from 'prop-types';
import { Title, Container, Description } from './style';

const ErrorPage = ({ title, textContent }) => (
  <Container>
    <Title>{title}</Title>
    <Description>{textContent}</Description>
  </Container>
);

export default ErrorPage;

ErrorPage.propTypes = {
  title: PropTypes.string.isRequired,
  textContent: PropTypes.string.isRequired,
};
