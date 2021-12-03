import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from 'styled-components';
import { AuthProvider } from './contexts/authContext';
//import theme from './styles/themes/material-dashboard-react';
import dark from './styles/themes/dark';
import GlobalStyles from './styles/GlobalStyles';
import './styles.css';

const queryClient = new QueryClient();

ReactDOM.render(
  <>
    {/* <ThemeProvider theme={dark}> */}
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </AuthProvider>
    {/* </ThemeProvider> */}
  </>,
  document.getElementById('root')
);