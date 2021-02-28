import React, { useState } from 'react';
import {
  ItemContainer, SubitemNavlink, TitleExpSubItems, ItemLink,
} from './styles';

function ExpandItems() {
  const [hideSubitem, setHideSubitems] = useState('0px');

  const hideMenu = () => {
    setHideSubitems((prev) => !prev);
  };
  return (
    <ItemContainer>
      <ItemLink onClick={hideMenu}>Engineering Apps</ItemLink>
      <TitleExpSubItems hideMenu={hideSubitem}>
        <SubitemNavlink activeClassName={SubitemNavlink.active} to="/fatigue" name="Fatigue Toolbox" exact>Fatigue Toolbox</SubitemNavlink>
        <SubitemNavlink to="/neuber" name="Neuber Toolbox" exact>Neuber Toolbox</SubitemNavlink>
        <SubitemNavlink to="/composites" name="Composite Toolbox" exact>Compoiste Toolbox</SubitemNavlink>
      </TitleExpSubItems>
    </ItemContainer>
  );
}

export default ExpandItems;
