import React from 'react';
import SessionStore from '../stores/SessionStore';
import SessionActions from '../actions/SessionActions';
import RaisedButton from 'material-ui/lib/raised-button';

function getStateFromFlux() {
  return {
    isLoggedIn: SessionStore.isLoggedIn()
  };
}

const LoginPage = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState() {
    return getStateFromFlux();
  },
  componentDidMount() {
    SessionStore.addChangeListener(this._onChange);
    if (this.state.isLoggedIn) {
      this.redirectLoggedInUser();
    }
  },
  componentWillUpdate(nextProps, nextState) {
    if (nextState.isLoggedIn) {
      this.redirectLoggedInUser();
    }
  },
  componentWillUnmount() {
    SessionStore.removeChangeListener(this._onChange);
  },
  handleLogIn() {
    SessionActions.authorize();
  },
  redirectLoggedInUser() {
    const { location } = this.props;
    if (location.state && location.state.nextPathname) {
      this.context.router.replace(location.state.nextPathname);
    } else {
      this.context.router.replace('/lists');
    }
  },
  render() {
    return (
      <div class='LoginPage'>
        <div class='LoginPage__banner'>
          <div class='LoginPage__text'>
            <h1>Almost Google tasks</h1>
            <p>Organise your life!</p>
            <RaisedButton
              class='login-button'
              label='Log in with Google'
              onClick={this.handleLogIn}
            />
          </div>
          <img
            src=''
            class='LoginPage__image'
          />
        </div>
      </div>
    );
  },
  _onChange() {
    this.setState(getStateFromFlux());
  }
});

export default LoginPage;
