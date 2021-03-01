import React, { useContext, useRef } from 'react';
import Menu from '@material-ui/icons/Menu';
import { ThemeProvider } from 'styled-components';
import {
  Bar, Logo, Anchor,
  theme,
} from './style';

import { TopBarItems } from './config';
import { AppContextDispatch, AppContext } from '../App/context';

const TopBar = () => {
  const appStateDispatch = useContext(AppContextDispatch);
  const appState = useContext(AppContext);
  const menuRef = useRef(null);
  console.log(appState);

  const showMenu = (e) => {
    if (menuRef.current.contains(e.target)) {
      console.log(e);
      appStateDispatch((prev) => !prev);
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <Bar>
        <Menu onClick={showMenu} innerRef={menuRef} style={{ cursor: 'pointer' }} />
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
