import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';
import {
  unitSystem, surfaceFinish, relFactor, loadFactor,
} from './MaterialData/constants';

import { fatigueTheoryItems } from './StressInput/constants';

const FatigueContext = createContext();
const FatigueContextDispatch = createContext();

const FatigueStateProvider = ({ children }) => {
  const [fatigueState, setFatigueState] = useState({
    activeStep: 1,
    unitSystem: unitSystem[0].value,
    ultimateStrength: 150,
    isSrufaceFactor: false,
    isLoadFactor: false,
    isRelFactor: false,
    ifCustomFactor: false,
    surtfaceFinishFactor: surfaceFinish[0].value,
    loadFactor: loadFactor[0].value,
    relFactor: relFactor[0].value,
    customFactor: '',
    excelError: '',
    fatigueTheory: fatigueTheoryItems[0].value,
    yieldStrength: 110,
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
