import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import Weather from './components/Weather';
import About from './components/About';
import Examples from './components/Examples';

export default (
  <Route path='/' component={App} >
    <IndexRoute component={Weather} />
    <Route path='about' component={About} />
    <Route path='examples' component={Examples} />
  </Route>
);
