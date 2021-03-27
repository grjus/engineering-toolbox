import React from 'react';
import GeneralCard from '../ToolboxComponents/GeneralCardTemplate';
import { Title, Description } from './styles';

const PageNotFound = () => (
  <>
    <GeneralCard>
      <Title>404 Page Not Found</Title>
      <Description>We are sorry, this page is not avaiable</Description>
    </GeneralCard>
  </>
);

export default PageNotFound;
