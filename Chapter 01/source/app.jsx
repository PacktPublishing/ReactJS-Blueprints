'use strict';
import React from 'react';
import {render} from 'react-dom';

const App = React.createClass({
  render: function () {
    console.log('running!');
    return (
      <div style={{textAlign:"center"}}>
        <h1>{this.props.greeting}</h1>
      </div>
    );
  }
});

render(
  <App greeting="Basic Setup - React Blueprints"/>,
  document.getElementById('container')
);
