import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { App } from './App';
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <App /> {/* // Implementa acá el enrutador. */}
  </BrowserRouter>,
  document.getElementById('root')
);
