import 'babel-polyfill';
import ReactDOM from 'react-dom';
import React from 'react';
import { Router, Route, Redirect, browserHistory } from 'react-router';

import SessionActions from './actions/SessionActions';
import SessionStore from './stores/SessionStore';
import App from './App';
import LoggedInLayout from './components/LoggedInLayout';
import AboutPage from './components/AboutPage';
import TasklistsPage from './containers/TasklistsPage';
import TasksPage from './containers/TasksPage';
import LoginPage from './containers/LoginPage';

window.handleGoogleApiLoaded = () => {
  SessionActions.authorize(true, renderApp);
};

function renderApp() {
  ReactDOM.render(
        <Router history={browserHistory}>
          <Redirect from='/' to='/login' />
          <Route path='/' component={App}>
            <Route path='/login' component={LoginPage} />
            <Route component={LoggedInLayout} onEnter={requireAuth}>
              <Route path='/about' component={AboutPage} />
              <Route path='/lists' component={TasklistsPage}>
                <Route path='/lists/:id' component={TasksPage} />
              </Route>
            </Route>
          </Route>
        </Router>,
        document.getElementById('mount-point')
    );
}

function requireAuth(nextState, replace) {
  if (!SessionStore.isLoggedIn()) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    });
  }
}
