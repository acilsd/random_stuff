import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import ListManager from './components/ListManager';

const container = document.querySelector('.container');

ReactDOM.render(
  <ListManager title='ingredients'/>
  , container
);
