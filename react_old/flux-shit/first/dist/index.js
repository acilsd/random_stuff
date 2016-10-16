import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import SessionActions from './actions/SessionActions';
import SessionStore from './stores/SessionStore';

import App from './App';
import LoggedInLayout from './components/layout/LoggedInLayout';
import AboutPage from './components/AboutPage';
import LoginPage from './components/LoginPage';
import TasklistsPage from './components/TasklistsPage';
import TasksPage from './components/TasksPage';

window.handleGoogleApiLoaded = () => {
  SessionActions.authorize(true, renderApp);
};

function requireAuth(nextState, replace) {
  if (!SessionStore.isLoggedIn()) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    });
  }
}

const container = document.querySelector('.container');

function renderApp() {
  ReactDOM.render(
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <Route path='/login' component={LoginPage} />
        <Route component={LoggedInLayout} onEnter={requireAuth}>
          <Route path='/about' component={AboutPage} />
          <Route path='/lisst' component={TasklistsPage}>
            <Route path='/lists/:id' component={TasksPage} />
          </Route>
        </Route>
      </Route>
    </Router>,
    container
  );
}
