import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import Routes from './routes';
import dark from './styles/themes/dark';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={dark}>
        <GlobalStyles />
        <Routes />
      </ThemeProvider>
    </div>
  );
}

export default App;
