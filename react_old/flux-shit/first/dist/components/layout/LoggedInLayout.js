import React, { Component } from 'react';

export default class AboutPage extends Component {
  render() {
    return (
      <div class="LoggedInLayout">
        <div class="LoggedInLayout__content">
          {this.props.children}
        </div>
      </div>
    );
  }
}
