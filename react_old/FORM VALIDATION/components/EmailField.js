import React, { Component } from 'react';
import Validator from 'email-validator';

export default class EmailField extends Component {
  constructor(props) {
    super(props);
    this.state = { valid: true, value: '' };
  }
  onChange(e) {
    if(!Validator.validate(e.target.value)) {
      this.setState({valid: false, value: e.target.value});
    } else {
      this.setState({valid: true, value: e.target.value});
    }
  }
  onSubmit() {
    this.setState({valid: true, value: ''});
  }

  render() {
    let formClass = this.state.valid ? "form-group" : "form-group has-error";
    return (
      <div class={formClass}>
        <input
          class="form-control"
          placeholder="email"
          onChange={this.onChange.bind(this)}
          value={this.state.value}
        />
      </div>
    );
  }
}
