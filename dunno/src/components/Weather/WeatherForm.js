import React, { Component, PropTypes } from 'react';

export default class WeatherForm extends Component {
  static propTypes = {
    onSearch: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {

    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const location = this.refs.location.value;

    if (location.length > 0) {
      this.refs.location.value = '';
      this.props.onSearch(location);
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text' placeholder='enter city name' ref='location'/>
          <button class='button expanded hollow'>get weather</button>
        </form>
      </div>
    );
  }
}
