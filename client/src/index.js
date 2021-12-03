import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AuthProvider } from './contexts/authContext';
import { Routes } from './App/index';
import './styles.css';

const queryClient = new QueryClient();

ReactDOM.render(
  <>

    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <Routes />
      </QueryClientProvider>
    </AuthProvider>

  </>,
  document.getElementById('root')
);