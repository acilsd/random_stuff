import React from 'react';
import { Link } from 'react-router';
import Paper from 'material-ui/lib/paper';
import './styles/AboutPage.less';

const AboutPage = React.createClass({
  render() {
    return (
      <div class='AboutPage'>
        <Paper
          zDepth={1}
          class='AboutPage__content'
        >
          <h2> Google Task Manager </h2>
          <p>This application is written based on <a href='https://developers.google.com/google-apps/tasks/'>
          Google Tasks API</a> using Material Design concepts.</p>
        </Paper>
      </div>
    );
  }
});

export default AboutPage;
