import React, { Component } from 'react';
import List from './List';

export default class ListManager extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [], newItemText: '' };
  }

  onChange(e) {
    this.setState(
      {
        newItemText: e.target.value
      }
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    const currentItems = this.state.items;
    currentItems.push(this.state.newItemText);
    this.setState({
      items: currentItems,
      newItemText: ''
    });
  }

  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input onChange={this.onChange.bind(this)} value={this.state.newItemText}/>
          <button>Add</button>
        </form>
        <List items={this.state.items} />
      </div>
    );
  }
}
