import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import LogRocket from 'logrocket';

LogRocket.init('utlpa8/online-store');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);