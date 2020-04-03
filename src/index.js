import React from 'react';
import ReactDOM from 'react-dom';
import './style.css'
import App from './components/app';
import ParameterState from './context/parameterContext/ParameterState';


ReactDOM.render(
  <React.StrictMode>
    <ParameterState>
      <App/>
    </ParameterState>
  </React.StrictMode>,
  document.getElementById('root')
);

