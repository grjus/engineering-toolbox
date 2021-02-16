import React from 'react';
import { Bar, Logo, Anchor } from './style';

const TopBar = () => (
  <Bar>
    <Logo href="">Engineering Toolbox</Logo>
    <Anchor>Contact</Anchor>
    <Anchor>About</Anchor>
    <Anchor>Theory manual</Anchor>
  </Bar>
);

export default TopBar;
