import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Base extends Component {
  render() {
    return (
      <div>
        <h1>Hello, Main Page!</h1>
        {this.props.children}
        <h2>Footer from Main Page!</h2>
      </div>
    );
  }
}
