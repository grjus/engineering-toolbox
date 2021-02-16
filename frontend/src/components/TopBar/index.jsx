import React from 'react';
import Menu from '@material-ui/icons/Menu';
import { ThemeProvider } from 'styled-components';
import {
  Bar, Logo, Anchor,
  theme,
} from './style';

import { TopBarItems } from './config';

const TopBar = () => (
  <ThemeProvider theme={theme}>
    <Bar>
      <Menu onClick={() => alert('Hello')} />
      <Logo href="">Engineering Toolbox</Logo>
      {TopBarItems.map((item) => (
        <Anchor
          key={item.key}
          activeClassName={Anchor.active}
          replace
          exact
          to={item.link}
        >
          {item.name}

        </Anchor>
      ))}

    </Bar>
  </ThemeProvider>
);

export default TopBar;
