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
    activeStep: 0,
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
    excelData: [[-50, 50, 200000], [-40, 80, 100000], [0, 100, 400000], [-50, 80, 200000], [-20, 90, 400000]],
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
