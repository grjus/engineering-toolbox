import React from 'react';
import Section from './Section';

const SSOT = () => (
  <Section title="Single Source of Truth">
    You may ask, why do I need a webapp? My spreadsheets works just fine. You are right.
    There is nothing wrong in using a spreadsheet, however there are some downsides.
    The main downside is version control. You don’t have any guarantee
    that each team member is working on the latest version of analysis code.
    Web application offers single source of truth in that aspect.
  </Section>
);

export default SSOT;
