import React from 'react';
import { Switch, Route } from 'react-router-dom';
import GlobalStyle from '../../style';
import TopBar from '../TopBar';
import FatigueToolbox from '../FatigueToolbox';
import Contact from '../Contact';
import NeuberToolbox from '../NeuberToolbox';
import CompositeToolbox from '../CompositeToolbox';
import HomePage from '../HomePage';
import PageNotFound from '../PageNotFound';

function App() {
  return (
    <>
      <GlobalStyle />
      <TopBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/fatigue" component={FatigueToolbox} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/neuber" component={NeuberToolbox} />
        <Route exact path="/composites" component={CompositeToolbox} />
        <Route component={PageNotFound} />
      </Switch>
    </>
  );
}

export default App;
