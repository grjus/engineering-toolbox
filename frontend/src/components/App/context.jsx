import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';

const AppContext = createContext();
const AppContextDispatch = createContext();

const AppStateProvider = ({ children }) => {
  const [appState, setAppState] = useState({
    showSidebar: '0px',
  });

  return (
    <AppContext.Provider value={appState}>
      <AppContextDispatch.Provider value={setAppState}>
        {children}
      </AppContextDispatch.Provider>
    </AppContext.Provider>
  );
};

AppStateProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node]).isRequired,
};
export { AppStateProvider, AppContextDispatch, AppContext };
