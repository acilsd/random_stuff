import React, { Component } from 'react';
import { NavLink, IndexNav } from '../Links';

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(e) {
    e.preventDefault();
    const location = this.refs.searchInput.value;
    const encoded = encodeURIComponent(location);

    if (location && location.length > 0) {
      window.location.search = '?location=' + encoded;
    }
    this.refs.search.value = '';
  }

  render() {
    return (
      <div class='top-bar'>
        <div class='top-bar-left'>
          <ul class='menu'>
            <li class='manu-text'>RANDOM SHIT</li>
            <li><IndexNav to='/'>Get Weather</IndexNav></li>
            <li><NavLink to='/about'>About</NavLink></li>
            <li><NavLink to='/examples'>Examples</NavLink></li>
          </ul>
        </div>
        <div class='top-bar-right'>
          <form onSubmit={this.handleSearch}>
            <ul class='menu'>
              <li>
                <input type='text' ref='searchInput' placeholder='search weather'/>
              </li>
              <li>
                <input type='submit' class='button' value='Yep!'/>
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
}
