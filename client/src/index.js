import React from 'react';
import ReactDOM from 'react-dom';
import './sass/master.sass';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import { contactPage } from './constants/constants';


ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
