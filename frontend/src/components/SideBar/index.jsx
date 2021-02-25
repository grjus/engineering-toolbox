import React, { useContext, useRef } from 'react';
import { Container, SideMenuiItemsContainer } from './styles';
import { AppContext, AppContextDispatch } from '../App/context';
import ExpandItems from './ExpandItems';

function SideBar() {
  const appContext = useContext(AppContext);
  const appContextDispatch = useContext(AppContextDispatch);
  const sideMenuRef = useRef(null);

  const hideBar = () => {
    appContextDispatch((prev) => ({
      ...prev, showSidebar: '0px',
    }));
  };

  return (
    <Container width={appContext.showSidebar} ref={sideMenuRef} onClick={hideBar}>
      <SideMenuiItemsContainer>
        <ExpandItems />
      </SideMenuiItemsContainer>
    </Container>
  );
}

export default SideBar;
