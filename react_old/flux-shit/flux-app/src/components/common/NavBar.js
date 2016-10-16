import React from 'react';
import NavItem from './NavItem';

const NavBar = React.createClass({
  render: function() {
    return (
      <div>
        <nav class="navbar navbar-default">
          <div class="navbar-header">
            <button
              type="button"
              class="navbar-toggle collapsed"
              data-toggle="#nav-collapse"
            >
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="*">Product Shop</a>
          </div>
          <div
            class="collapse navbar-collapse"
            id="nav-collapse"
          >
            <ul class="nav navbar-nav">
              {NavItem}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
});

export default NavBar;
