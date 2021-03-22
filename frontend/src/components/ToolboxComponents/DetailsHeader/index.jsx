import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { DetailIcon, IconContainer, Header } from './style';

export default function DetailsHeader({ expand, onClick, label }) {
  const [rotate, setRotate] = useState('rotate(0deg)');

  useEffect(() => {
    if (expand) {
      setRotate('rotate(180deg)');
    } else {
      setRotate('rotate(0deg)');
    }
  }, [expand]);

  return (
    <IconContainer onClick={onClick}>
      <Header>{label}</Header>
      <DetailIcon show={rotate} fontSize="small" color="primary" />
    </IconContainer>
  );
}

DetailsHeader.propTypes = {
  expand: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};
