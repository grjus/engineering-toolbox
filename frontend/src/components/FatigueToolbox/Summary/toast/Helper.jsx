import React from 'react';
import { Title, Content, Container } from '../../../ToolboxComponents/Toast/style';
import { summaryDesc } from './theory';

export default function Helper() {
  return (
    <Container>
      <Title>Summary</Title>
      <Content>{summaryDesc}</Content>
    </Container>
  );
}
