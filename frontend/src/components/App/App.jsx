import React, { useEffect, useContext } from 'react';
import {
  Switch, Route, useLocation,
} from 'react-router-dom';
import GlobalStyle from '../../style';
import TopBar from '../TopBar';
import SideBar from '../SideBar';
import FatigueToolbox from '../FatigueToolbox';
import Contact from '../Contact';
import NeuberToolbox from '../NeuberToolbox';
import HomePage from '../HomePage';
import PageNotFound from '../PageNotFound';
import About from '../About';
import { FatigueStateProvider } from '../FatigueToolbox/context';
import useApiHealth from '../customHooks';
import { AppContextDispatch } from './context';
import SplashScreen from '../ToolboxComponents/SplashScreen';
import { FadeContainer } from '../ToolboxComponents/FadeContainer/FadeContainer';
import UnderDev from '../Underconstruction';

function App() {
  const [error, loading] = useApiHealth(10000);
  const appStateDispatch = useContext(AppContextDispatch);
  const location = useLocation();
  useEffect(() => {
    appStateDispatch({
      showSidebar: '0px',
    });
  }, [location, appStateDispatch]);
  if (error) {
    console.log(error);
    // return <Redirect to="" />;
  }

  return (

    <>
      <GlobalStyle />
      <FadeContainer condition={!loading} timeout={1000}>
        <TopBar />
        <SideBar />
        <Switch>
          <Route exact path="/" render={() => <HomePage key={Date.now()} />} />
          <Route exact path="/fatigue" render={() => <FatigueStateProvider key={Date.now()}><FatigueToolbox /></FatigueStateProvider>} />
          <Route exact path="/stress-correction" render={() => <NeuberToolbox key={Date.now()} />} />
          <Route exact path="/composites" component={UnderDev} />
          <Route
            exact
            path="/contact"
            render={() => <Contact key={Date.now()} />}
          />
          <Route exact path="/about" component={About} />
          <Route exact path="/theory-manual" component={UnderDev} />
          <Route component={PageNotFound} />
        </Switch>
      </FadeContainer>
      <SplashScreen visible={loading} />
    </>
  );
}

export default App;
