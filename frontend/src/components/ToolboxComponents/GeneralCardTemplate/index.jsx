import React from 'react';
import PropTypes from 'prop-types';
import { Container } from '../../../style';
import AboutLogo from './Logo';
import { FadeContainer } from '../FadeContainer/FadeContainer';

const GeneralCard = ({ children }) => (
  <FadeContainer condition timeout={1000}>
    <Container>
      <AboutLogo />
      {children}
    </Container>
  </FadeContainer>
);

export default GeneralCard;

GeneralCard.propTypes = {
  children: PropTypes.element.isRequired,
};
