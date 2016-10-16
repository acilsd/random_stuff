import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import App from './App';
import TopicList from './containers/TopicList';
import Topic from './containers/Topic';

import styles from './style/main.scss';

const store = configureStore();

const container = document.querySelector('.container');

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={TopicList}/>
        <Route path='/:id' component={Topic} />
      </Route>
    </Router>
  </Provider>
  , container);
