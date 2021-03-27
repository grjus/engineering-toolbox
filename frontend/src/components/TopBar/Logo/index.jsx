import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import LogoComponent from '../../ToolboxComponents/LogoIcon';
import { Container, Logo } from './style';

const LogoAssm = () => {
  const [triggerRotate, setTriggerRotate] = useState(0);
  const location = useLocation();

  useEffect(() => {
    setTriggerRotate((prev) => {
      if (prev === 0) {
        return 360;
      }
      return 0;
    });
  }, [location]);

  return (
    <Container to="/" exact replace>
      <Logo>Engineering Toolbox</Logo>
      <LogoComponent rotValue={triggerRotate} />
    </Container>
  );
};

export default LogoAssm;
