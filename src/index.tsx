import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { CreateServerMirage } from './util/mirage';

CreateServerMirage();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);