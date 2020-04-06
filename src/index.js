import React from 'react';
import ReactDOM from 'react-dom';
import './style.css'
import ParameterState from './context/parameterContext/ParameterState';
import AlphabetOptions from './components/alphabetOptions/AlphabetOptions';


ReactDOM.render(
  <React.StrictMode>
    <ParameterState>
      <AlphabetOptions/>
    </ParameterState>
  </React.StrictMode>,
  document.getElementById('root')
);

