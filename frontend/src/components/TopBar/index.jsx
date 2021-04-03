import React, { useContext, useRef } from 'react';
import Menu from '@material-ui/icons/Menu';
import { ThemeProvider } from 'styled-components';
import LogoAssm from './Logo';
import {
  Bar, Anchor,
  theme, NavLinkUl, LogoBox,
} from './style';

import { TopBarItems } from './config';
import { AppContextDispatch } from '../App/context';

const TopBar = () => {
  const appStateDispatch = useContext(AppContextDispatch);
  const menuRef = useRef(null);

  const showMenu = (e) => {
    if (menuRef.current.contains(e.target)) {
      appStateDispatch((prev) => ({
        ...prev, showSidebar: '280px',
      }));
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <nav>
        <Bar>
          <Menu onClick={showMenu} innerRef={menuRef} style={{ cursor: 'pointer', heigth: '100%', margin: 'auto 0' }} />
          <LogoBox>
            <LogoAssm rotate />
          </LogoBox>
          <NavLinkUl>
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
          </NavLinkUl>
        </Bar>
      </nav>
    </ThemeProvider>
  );
};

export default TopBar;
