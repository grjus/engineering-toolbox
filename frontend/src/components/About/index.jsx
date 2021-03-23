import React from 'react';

import GeneralCard from '../ToolboxComponents/GeneralCardTemplate';
import Mission from './Mission';
import SSOT from './SSOT';

const About = () => (
  <>
    <GeneralCard>
      <Mission />
      <SSOT />
    </GeneralCard>

  </>
);

export default About;
