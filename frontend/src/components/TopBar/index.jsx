import React, { useContext } from 'react';
import Menu from '@material-ui/icons/Menu';
import { ThemeProvider } from 'styled-components';
import {
  Bar, Logo, Anchor,
  theme,
} from './style';

import { TopBarItems } from './config';
import { AppContextDispatch } from '../App/context';

const TopBar = () => {
  const appStateDispatch = useContext(AppContextDispatch);

  const showMenu = () => {
    appStateDispatch((prev) => ({
      ...prev, showSidebar: '300px',
    }));
  };
  return (
    <ThemeProvider theme={theme}>
      <Bar>
        <Menu onClick={showMenu} style={{ cursor: 'pointer' }} />
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
};

export default TopBar;
