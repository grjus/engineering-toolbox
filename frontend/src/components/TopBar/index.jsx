import React from 'react';
import { Bar, Logo, Anchor } from './style';
import { TopBarItems } from './config';

const TopBar = () => (
  <Bar>
    <Logo href="">Engineering Toolbox</Logo>
    {TopBarItems.map((item) => (
      <Anchor
        replace
        exact
        to={item.link}
      >
        {item.name}

      </Anchor>
    ))}

  </Bar>
);

export default TopBar;
