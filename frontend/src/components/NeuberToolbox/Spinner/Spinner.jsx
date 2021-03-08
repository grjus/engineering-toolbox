import React from 'react';
import PropTypes from 'prop-types';
import CustomSpinner from '../../ToolboxComponents/Spinner';
import { Container, Message } from './style';

function Spinner({ isRunning }) {
  // if (isRunning) {
  return (
    <Container isRunning={isRunning}>
      <CustomSpinner marginTop="10px" size="20px" />
      <Message>Fetching data</Message>
    </Container>
  );
}
//   }
//   return null;
// }

export default Spinner;

Spinner.propTypes = {
  isRunning: PropTypes.bool.isRequired,
};
