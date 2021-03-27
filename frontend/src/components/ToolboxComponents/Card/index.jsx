import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './style';

export default function Card({ children }) {
  return (
    <Container>
      {children}
    </Container>
  );
}

Card.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node]).isRequired,
};
