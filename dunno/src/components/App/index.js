import React, { PropTypes } from 'react';
import NavBar from '../NavBar';

const App = (props) => {
  return (
    <div>
      <NavBar />
      <div class='row'>
        <div class='columns medium-6 large-4 small-centered'>
          {props.children}
        </div>
      </div>
    </div>
  );
};

App.propTypes = {
  children: PropTypes.any.isRequired
};

export default App;
