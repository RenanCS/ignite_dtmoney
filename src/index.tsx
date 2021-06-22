import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { CreateServerMirage } from './helper/mirage';

const namespace = process.env.REACT_APP_NODE_ENV === "development" ? "api" : "";
CreateServerMirage(namespace);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);