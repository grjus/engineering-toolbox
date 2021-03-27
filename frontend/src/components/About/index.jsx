import React from 'react';

import GeneralCard from '../ToolboxComponents/GeneralCardTemplate';
import Mission from './Mission';
import SSOT from './SSOT';

const About = () => (
  /**
 * About section
 *
 */
  <>
    <GeneralCard>
      <Mission />
      <SSOT />
    </GeneralCard>

  </>
);

export default About;
