/*eslint no-console: off*/
import React, { Component, PropTypes } from 'react';
import WeatherForm from './WeatherForm';
import Message from './Message';
import { fetchWeather } from '../../api/fetchWeather';

export default class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      location: '',
      temp: null
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    const location = this.props.location.query.location;
    if (location && location.length > 0) {
      this.handleSearch(location);
    }
  }

  componenWillRecieveProps(newProps) {
    
  }

  handleSearch(location) {
    this.setState({ isLoading: true });
    fetchWeather(location)
    .then((temp) => {
      this.setState({
        isLoading: false,
        location,
        temp
      });
    })
    .catch((err) => {
      console.error(err);
    });
  }

  render() {
    const { location, temp, isLoading } = this.state;
    return (
      <div>
        <h1 class='text-center'>Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        <Message city={location} temp={temp} loading={isLoading}/>
      </div>
    );
  }
}
