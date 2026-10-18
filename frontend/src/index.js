import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import LogRocket from 'logrocket';

LogRocket.init('app-id-demo/online-store');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);