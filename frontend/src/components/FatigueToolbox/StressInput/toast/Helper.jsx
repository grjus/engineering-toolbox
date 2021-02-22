import React from 'react';
import {
  Title, Content, Container, Image,
} from '../../../ToolboxComponents/Toast/style';
import { fatigueTheoryDesc, inputData } from './theory';
import FAT_IMG from './fat_theo.png';

export default function Helper() {
  return (
    <Container>
      <Title>Input data</Title>
      <Content>{inputData}</Content>
      <Title>Fatigue theory</Title>
      <Content>{fatigueTheoryDesc}</Content>
      <Image src={FAT_IMG} />
    </Container>
  );
}
