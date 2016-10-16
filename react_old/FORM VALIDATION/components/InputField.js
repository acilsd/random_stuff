import React, { Component } from 'react';
import Validator from 'email-validator';

export default class NameField extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }
  onChange(e) {
    this.seState({value: e.target.value});
  }
  onSubmit() {
    this.setState({value: ''});
  }

  render() {
    return (
        <input
          class="form-control"
          placeholder={this.props.type + ' Name'}
          onChange={this.onChange}
          value={this.state.value}
        />
    );
  }
}
