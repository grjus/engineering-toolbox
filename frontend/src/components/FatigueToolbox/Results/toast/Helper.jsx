import React from 'react';
import { Title, Content, Container } from '../../../ToolboxComponents/Toast/style';
import { unitSystemDesc, outputTableDesc, chartDesc } from './theory';

export default function Helper() {
  return (
    <Container>
      <Title>Results</Title>
      <Title small>Unit system</Title>
      <Content>{unitSystemDesc}</Content>
      <Title small>Output table</Title>
      <Content>{outputTableDesc}</Content>
      <Title small>Fatigue chart</Title>
      <Content>{chartDesc}</Content>
    </Container>
  );
}
