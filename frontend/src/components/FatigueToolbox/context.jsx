import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';
// import { unitSystem } from './constants';

const FatigueContext = createContext();
const FatigueContextDispatch = createContext();

const FatigueStateProvider = ({ children }) => {
  const [fatigueState, setFatigueState] = useState({
    activeStep: 0,
    unitSystem: 'MPa',
  });

  return (
    <FatigueContext.Provider value={fatigueState}>
      <FatigueContextDispatch.Provider value={setFatigueState}>
        {children}
      </FatigueContextDispatch.Provider>
    </FatigueContext.Provider>
  );
};

FatigueStateProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node]).isRequired,
};
export { FatigueStateProvider, FatigueContextDispatch, FatigueContext };
