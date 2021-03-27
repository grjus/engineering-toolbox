import React from 'react';
import { Title, Content, Container } from '../../../ToolboxComponents/Toast/style';
import { ultStrDesc, fatigueFactorsDesc } from './theory';

export default function Helper() {
  return (
    <Container>
      <Title>Ultimate strength</Title>
      <Content>{ultStrDesc}</Content>
      <Title>Modification factors</Title>
      <Content>{fatigueFactorsDesc}</Content>
    </Container>
  );
}
