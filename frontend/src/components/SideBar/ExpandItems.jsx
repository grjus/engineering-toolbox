import React, { useState, useEffect, useContext } from 'react';
import {
  ItemContainer, SubitemNavlink, TitleExpSubItems, ItemLink,
} from './styles';

import { AppContext, AppContextDispatch } from '../App/context';

function ExpandItems() {
  const [hideSubitem, setHideSubitems] = useState('0px');
  const appState = useContext(AppContext);
  const appStateDispatch = useContext(AppContextDispatch);
  const { showSidebar } = appState;
  const hideMenu = () => {
    setHideSubitems((prev) => !prev);
  };

  const hideSideMenu = () => {
    appStateDispatch({
      ...appState, showSidebar: '0px',
    });
  };

  useEffect(() => {
    if (showSidebar === '0px') {
      setHideSubitems('0px');
    }
  }, [showSidebar]);

  return (
    <ItemContainer>
      <ItemLink onClick={hideMenu}>Engineering Apps</ItemLink>
      <TitleExpSubItems hideMenu={hideSubitem}>
        <SubitemNavlink onClick={hideSideMenu} activeClassName={SubitemNavlink.active} to="/fatigue" name="Fatigue Toolbox" exact>Fatigue Toolbox</SubitemNavlink>
        <SubitemNavlink onClick={hideSideMenu} to="/neuber" name="Neuber Toolbox" exact>Neuber Toolbox</SubitemNavlink>
        <SubitemNavlink to="/composites" name="Composite Toolbox" exact>Compoiste Toolbox</SubitemNavlink>
      </TitleExpSubItems>
    </ItemContainer>
  );
}

export default ExpandItems;
