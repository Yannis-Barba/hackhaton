import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import AppChat from './components/firebase/AppChat';

ReactDOM.render(
  <BrowserRouter>
    <App />
    <AppChat />
  </BrowserRouter>,
  document.getElementById('root')
);
