'use strict';

import React from 'react';
import {ProgressBar} from 'react-bootstrap';
let tickInterval;

const ProgressBars = React.createClass({
  getInitialState(){
    return {
      progress: 0
    }
  },
  componentDidMount(){
    tickInterval = setInterval(this.tick, 500);
  },
  componentWillUnmount(){
    clearInterval(tickInterval);
  },
  tick(){
    this.setState({progress: this.state.progress < 100 ? ++this.state.progress : 0})
  },
  render() {
    return (
      <div>
        <h2>ProgressBars</h2>
        <ProgressBar active now={this.state.progress}/>

        <ProgressBar striped bsStyle="success" now={this.state.progress}/>

        <ProgressBar now={this.state.progress} />

        <ProgressBar>
          <ProgressBar bsStyle="warning" now={20} key={1} label="System Files" />
          <ProgressBar bsStyle="info" now={40} key={2} label="Documents" />
          <ProgressBar bsStyle="danger" active striped now={40} key={3} label="Crunching" />
        </ProgressBar>

      </div>
    );
  }
});

module.exports = ProgressBars;
