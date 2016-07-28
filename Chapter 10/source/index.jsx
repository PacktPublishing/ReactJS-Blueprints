import './style.scss';
import polyfill from './polyfills';
import Config from './config';
import React, { Component, PropTypes } from 'react';
import MyGame from './game';
import Title from './title';
import {render} from 'react-dom';

class Index extends Component {
  constructor(){
    super();
    this.state={};
    this.state.scene="title";
  }

  callback(val: string){
    this.setState({scene: val})
  }

  render(){
    switch(this.state.scene){
      case "title":
        return <Title cb={this.callback.bind(this)} />
      break;

      case "game":
        return <MyGame cb={this.callback.bind(this)} />
      break;
    }
  }

}

render(
  <Index />,
  document.getElementById('app')
);
