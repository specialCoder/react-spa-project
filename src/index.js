import React from 'react';
import ReactDOM from 'react-dom';
import { AppProvider } from './contexts/index';
import App from './App.tsx';

console.log(`environment:${process.env.NODE_ENV}`);
ReactDOM.render(  
  <AppProvider>
    <App />
  </AppProvider>, 
  window.document.getElementById('app')
);
