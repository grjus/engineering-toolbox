import React from 'react';
import { Container } from '../../style';
import { FadeContainer } from '../ToolboxComponents/FadeContainer/FadeContainer';
import MainCard from './MainCard';

const HomePage = () => (
  <FadeContainer condition timeout={500}>
    <Container noBackColor>
      <MainCard />
    </Container>
  </FadeContainer>
);

export default HomePage;
