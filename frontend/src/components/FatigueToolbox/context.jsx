import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';
import {
  unitSystemItems, surfaceFinishItems, relFactorItems, loadFactorItems,
} from './MaterialData/constants';

import { fatigueTheoryItems } from './StressInput/constants';

const FatigueContext = createContext();
const FatigueContextDispatch = createContext();

export const initFatigueState = {
  activeStep: 0,
  unitSystem: unitSystemItems[0].value,
  surfaceFactor: {
    isrequired: false,
    value: surfaceFinishItems[0].value,
  },
  loadFactor: {
    isrequired: false,
    value: loadFactorItems[0].value,
  },
  reliabilityFactor: {
    isrequired: false,
    value: relFactorItems[0].value,
  },
  userDefinedFactor: {
    isrequired: false,
    value: null,
  },
  ultimateStrength: 150,
  excelError: '',
  fatigueTheory: fatigueTheoryItems[0].value,
  yieldStrength: 10,
  excelData: [[-50, 50, 200000], [-40, 80, 100000], [0, 100, 400000], [-50, 80, 200000], [-20, 90, 400000]],
  excelDataApi: null,
};
const FatigueStateProvider = ({ children }) => {
  const [fatigueState, setFatigueState] = useState({ ...initFatigueState });

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
