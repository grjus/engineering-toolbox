import { useEffect, useContext } from 'react';
import { AppContextDispatch, AppContext } from '../App/context';

const useOutsideClick = (userRef) => {
  const stateDispatch = useContext(AppContextDispatch);
  const appState = useContext(AppContext);
  useEffect(() => {
    const handleCloseSideMenu = (event) => {
      if (userRef.current && !userRef.current.contains(event.target) && appState.showSidebar !== '0px') {
        stateDispatch((prev) => ({
          ...prev, showSidebar: '0px',
        }));
      }
    };
    document.addEventListener('click', handleCloseSideMenu);
    return () => {
      document.removeEventListener('click', handleCloseSideMenu);
    };
  },
  [userRef, stateDispatch, appState]);
};

export default useOutsideClick;
