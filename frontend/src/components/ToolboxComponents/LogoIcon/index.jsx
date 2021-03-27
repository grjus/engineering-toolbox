import React from 'react';
import PropTypes from 'prop-types';
import { LogoIcon } from './style';

const LogoComponent = ({ rotValue, icoSize, margintop }) => <LogoIcon show={`rotate(${rotValue}deg)`} color="primary" fontSize={icoSize} margintop={margintop} />;

LogoComponent.propTypes = {
  rotValue: PropTypes.number,
  icoSize: PropTypes.oneOf(['default', 'small', 'large']),
  margintop: PropTypes.string,
};

LogoComponent.defaultProps = {
  rotValue: 0,
  icoSize: 'default',
  margintop: '3px',
};

export default LogoComponent;
