import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
const container = document.getElementById('container');
import foundation from 'foundation-sites/dist/css/foundation.min.css';

render(
  <Router history={browserHistory} routes={routes} />,
  container
);
