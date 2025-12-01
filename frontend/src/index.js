import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; // Simplified import path
import App from './App';
import store from './redux/store';
import { Provider } from 'react-redux';

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('root');
  const root = createRoot(container);
  
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );
});