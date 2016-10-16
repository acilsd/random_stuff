import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/common/NavBar';

const container = document.querySelector('.mount');

ReactDOM.render(
  <NavBar />
  , container
);
