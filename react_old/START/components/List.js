import React, { Component } from 'react';
import ListItem from './ListItem';

export default class List extends Component {
  render() {
    const createItem = (text, index) => {
      return (
        <ListItem key={index + text} text={text} />
      );
    };

    return (
      <ul>
        {this.props.items.map(createItem)}
      </ul>
    );
  }
}
