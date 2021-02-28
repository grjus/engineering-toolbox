import React, { useContext, useRef } from 'react';
import {
  CloseIco, Container, ItemNavLink, SideMenuiItemsContainer,
} from './styles';
import { AppContext, AppContextDispatch } from '../App/context';
// import { AppContext } from '../App/context';
import ExpandItems from './ExpandItems';
import useOutsideClick from './customHooks';

function SideBar() {
  const appContext = useContext(AppContext);
  const appContextDispatch = useContext(AppContextDispatch);
  const sideMenuRef = useRef(null);
  useOutsideClick(sideMenuRef);

  const hideBar = (e) => {
    e.stopPropagation();
    if (e.target.localName === 'svg') {
      appContextDispatch((prev) => ({
        ...prev, showSidebar: '0px',
      }));
    }
  };

  return (
    <Container width={appContext.showSidebar} ref={sideMenuRef} onClick={hideBar}>
      <CloseIco onClick={hideBar} />
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
