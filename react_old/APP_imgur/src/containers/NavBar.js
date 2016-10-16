import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import * as actions from '../actions';

class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.testProp();
  }
  render() {
    return (
      <div class="wrapper">
        <nav class="main-nav">
          <Link to='/' class="main-logo">Imgur browser</Link>
          <button class="btn btn--search" onClick={this.handleClick.bind(this)}>test</button>
        </nav>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    test: state.topics.test
  };
}

export default connect(mapStateToProps, actions)(NavBar);
