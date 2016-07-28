'use strict';

import React from 'react';
import {Well} from 'react-bootstrap';

const Wells = React.createClass({
  render() {
    return (
      <div>
        <h2>Wells</h2>
        <Well bsSize="small" bsStyle="success">Hi, I'm a small well.</Well>

        <Well bsSize="small" bsStyle="primary">Hi, I'm a medium well.</Well>

        <Well bsSize="large">Hi, I'm a large well.</Well>
      </div>
    );
  }
});

module.exports = Wells;
