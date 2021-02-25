import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './style';
import App from './components/App/App';
import { AppStateProvider } from './components/App/context';

ReactDOM.render(
  <HashRouter>
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <AppStateProvider>
          <App />
        </AppStateProvider>
      </ThemeProvider>
    </React.StrictMode>
  </HashRouter>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
