import React, { useEffect, useContext } from 'react';
import {
  Switch, Route, Redirect, useLocation,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import GlobalStyle from '../../style';
import TopBar from '../TopBar';
import SideBar from '../SideBar';
import FatigueToolbox from '../FatigueToolbox';
import Contact from '../Contact';
import NeuberToolbox from '../NeuberToolbox';
import CompositeToolbox from '../CompositeToolbox';
import HomePage from '../HomePage';
import PageNotFound from '../PageNotFound';
import About from '../About';
import TheoryManual from '../ThoeryManual';
import { FatigueStateProvider } from '../FatigueToolbox/context';
import useApiHealth from '../customHooks';
import { AppContextDispatch } from './context';

function App() {
  const error = useApiHealth(8000);
  const appStateDispatch = useContext(AppContextDispatch);
  const location = useLocation();
  useEffect(() => {
    appStateDispatch({
      showSidebar: '0px',
    });
  }, [location, appStateDispatch]);
  if (error) {
    return <Redirect to="" />;
  }

  return (

    <>
      <GlobalStyle />
      <TopBar />
      <SideBar />
      <Switch>
        <Route exact path="/" render={(props) => <HomePage key={props.location.key} />} />
        <Route exact path="/fatigue" render={(props) => <FatigueStateProvider key={props.location.key}><FatigueToolbox /></FatigueStateProvider>} />
        <Route exact path="/stress-correction" component={NeuberToolbox} />
        <Route exact path="/composites" component={CompositeToolbox} />
        <Route
          exact
          path="/contact"
          render={(props) => <Contact key={props.location.key} />}
        />
        <Route exact path="/about" component={About} />
        <Route exact path="/theory-manual" component={TheoryManual} />
        <Route component={PageNotFound} />
      </Switch>
    </>
  );
}

export default App;

App.propTypes = {
  location: PropTypes.instanceOf(Object),
};

App.defaultProps = {
  location: {},
};
