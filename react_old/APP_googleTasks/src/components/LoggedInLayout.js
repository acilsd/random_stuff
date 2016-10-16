import React from 'react';

import './styles/LoggedInLayout.less';

const LoggedInLayout = React.createClass({
  render() {
    return (
      <div class='LoggedInLayout'>
        <div class='LoggedInLayout__content'>
          {this.props.children}
        </div>
      </div>
    );
  }
});

export default LoggedInLayout;
