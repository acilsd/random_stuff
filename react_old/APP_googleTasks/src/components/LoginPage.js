import React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';
import './styles/LoginPage.less';

const LoginPage = React.createClass({
  render() {
    return (
      <div class='LoginPage'>
        <div class='LoginPage__banner'>
          <div class='LoginPage__text'>
            <h1>Google Task Manager</h1>
            <p>Organize your life</p>
            <RaisedButton
              class='LoginPage__button'
              label='Log in with Google'
              onClick={this.props.onLogIn}
            />
          </div>
          <img
            src='app/img/desk.png'
            class='LoginPage__image'
          />
        </div>
      </div>
    );
  }
});

export default LoginPage;
