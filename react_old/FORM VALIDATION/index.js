import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import FormCapture from './components/FormCapture';

const container = document.querySelector('.container');

ReactDOM.render(
  <FormCapture />
  , container
);
