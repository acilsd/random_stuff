import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart.jsx';
import GoogleMap from '../components/googleMap.jsx';
import weatherlist from '../styles/WeatherList.css';

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    const temp = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp - 273);
    const pressure = _.map(cityData.list.map(weather => weather.main.pressure), (pressure) => pressure / 1.3332239);
    const humidity = cityData.list.map(weather => weather.main.humidity);
    const { lon, lat}  = cityData.city.coord;

    return (
      <tr key={name}>
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td><Chart data={temp} color="green" units="C"/></td>
        <td><Chart data={pressure} color="orange" units="mmHg"/></td>
        <td><Chart data={humidity} color="lime" units="%"/></td>
      </tr>
    );
  }

  render() {
    return (
      <table class="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (C)</th>
            <th>Pressure (mmHg)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather }; //(state) {weather: state.weather} (ES6)
}

export default connect(mapStateToProps)(WeatherList);
