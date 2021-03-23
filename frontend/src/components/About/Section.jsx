import React from 'react';
import PropTypes from 'prop-types';
import { Container, Title, Description } from './style';

const Section = ({ title, children }) => (
  <Container>
    <Title>
      {title}
    </Title>
    <Description>
      {children}
    </Description>
  </Container>
);

export default Section;
Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
