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
import About from '../About';
import TheoryManual from '../ThoeryManual';
import { FatigueStateProvider } from '../FatigueToolbox/context';

function App() {
  return (
    <>
      <GlobalStyle />
      <TopBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <FatigueStateProvider>
          <Route exact path="/fatigue" component={FatigueToolbox} />
        </FatigueStateProvider>
        <Route exact path="/neuber" component={NeuberToolbox} />
        <Route exact path="/composites" component={CompositeToolbox} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/about" component={About} />
        <Route exact path="/theory-manual" component={TheoryManual} />
        <Route component={PageNotFound} />
      </Switch>
    </>
  );
}

export default App;
