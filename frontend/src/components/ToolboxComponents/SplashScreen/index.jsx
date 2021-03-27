import React from 'react';
import PropTypes from 'prop-types';
import { FadeContainer } from '../FadeContainer/FadeContainer';
import LogoComponent from '../LogoIcon';
import Progress from './ProgressBar';
import {
  Container, Title, Logocontainer, DescriptionContainer, Description, Bar,
} from './style';

const SplashScreen = ({ visible }) => (
  <FadeContainer condition={visible} timeout={1000}>
    <Container>
      <Logocontainer>
        <Title>Engineering Toolbox</Title>
        <LogoComponent icoSize="large" margintop="40px" />
      </Logocontainer>
      <DescriptionContainer>
        <Description>Connecting to server</Description>
        <Bar>
          <Progress variant="query" />
        </Bar>
      </DescriptionContainer>
    </Container>
  </FadeContainer>
);

export default SplashScreen;

SplashScreen.propTypes = {
  visible: PropTypes.bool.isRequired,
};
