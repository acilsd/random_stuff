import React, { Component } from 'react';
import EmailField from './EmailField';
import InputField from './InputField';

export default class FormCapture extends Component {
  onSubmit(e) {
    if(!this.refs.fieldEmail.state.valid) {
      alert('something is going wrong');
    } else {
      //pretending we are sending stuff to our backend haha
      const httpRequestBody = {
        email: this.refs.fieldEmail.state.value,
        firstName: this.refs.fieldName.state.value
      };
      this.refs.fieldEmail.onSubmit();
      this.refs.fieldName.onSubmit();
    }
  }

  render() {
    return (
      <div class="col-sm-3">
        <div class="panel panel-default">
          <div class="panel-body">
            <InputField type='First' ref='fieldName'/>
            <EmailField ref='fieldEmail'/>
            <button
              class="btn btn-primaty"
              onClick={this.onSubmit.bind(this)} > Submit
            </button>
          </div>
        </div>
      </div>
    );
  }
}
