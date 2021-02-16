import React, { useState } from 'react';
import propTypes from 'prop-types';

const FatigueToolbox = ({ location }) => {
  const [counter, setCounter] = useState(0);
  const { state } = location;

  console.log(state);

  const handleIncreaseCounter = () => {
    setCounter((prev) => prev + 1);
  };

  return (
    <>
      <div>Fatigue Toolbox</div>
      {counter}
      <button type="button" onClick={handleIncreaseCounter}>Increase</button>
    </>
  );
};

FatigueToolbox.propTypes = {
  location: propTypes.string.isRequired,
};

export default FatigueToolbox;
