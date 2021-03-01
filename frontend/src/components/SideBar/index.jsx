import React, { useContext, useRef } from 'react';
import {
  CloseIco, Container, ItemNavLink, SideMenuiItemsContainer,
} from './styles';
import { AppContext, AppContextDispatch } from '../App/context';
// import { AppContext } from '../App/context';
import ExpandItems from './ExpandItems';

function SideBar() {
  const appContext = useContext(AppContext);
  const appContextDispatch = useContext(AppContextDispatch);
  const sideMenuRef = useRef(null);
  const closeIco = useRef(null);

  const hideBar = (e) => {
    if (closeIco.current.contains(e.target)) {
      appContextDispatch((prev) => ({
        ...prev, showSidebar: true,
      }));
    }
  };

  return (
    <Container width={appContext.showSidebar} ref={sideMenuRef} onClick={hideBar}>
      <CloseIco onClick={hideBar} innerRef={closeIco} />
      <SideMenuiItemsContainer>
        <ExpandItems />
        <ItemNavLink activeClassName={ItemNavLink.active} exact to="/contact">Contact</ItemNavLink>
        <ItemNavLink activeClassName={ItemNavLink.active} exact to="/about">About</ItemNavLink>
        <ItemNavLink activeClassName={ItemNavLink.active} exact to="/theory-manual">Theory manual</ItemNavLink>
      </SideMenuiItemsContainer>
    </Container>
  );
}

export default SideBar;
