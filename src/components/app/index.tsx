import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyle from 'styled/global-style';
import { defaultTheme } from 'styled/default-theme';
import { ThemeProvider } from 'styled-components';
import GoogleAuthProvider from 'hocs/google-auth-provider';
import Layout from './layout';

const App = () => (
  <ThemeProvider theme={defaultTheme}>
    <GlobalStyle />
    <Router>
      <GoogleAuthProvider>
        <Layout />
      </GoogleAuthProvider>
    </Router>
  </ThemeProvider>
);

export default App;
