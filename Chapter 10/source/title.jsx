import './style.scss';
import polyfill from './polyfills';
import Config from './config';
import React, { Component, PropTypes } from 'react';
import Game from './engine';
import keypress from './components/keypress/index';

//http://opengameart.org/content/roguelikerpg-pack-1700-tiles
//http://opengameart.org/content/dungeon-crawl-32x32-tiles
class Title extends Component {
  constructor(){
    super();
    this.last = Date.now();
    this.keys={};
  }

  keyInput(
    keys
  ){
    // Space
    if (keypress.space(keys)) {
      this.props.cb("game");
    }
  }

  updateGame(modifier){
    // Avoid updating the game if the
    // canvas has not yet been initalized
    if(typeof this.refs.canvas ==="undefined")
      return;

    const { canvas } = this.refs;
    const ctx = canvas.getContext("2d");

    Game.loadImage(
      canvas,
      Config.backgrounds.title
    );

    // Keyboard
    this.keyInput(this.keys);

  }


  componentDidMount(){
    Game.keyboard(this.keys);
    const gameLoop = () =>{
      var now = Date.now();
      var delta = now - this.last;
      this.updateGame(delta / 1000);
      this.last = now;
      window.requestAnimationFrame(gameLoop);
    }
    gameLoop();

  }

  render(){
    return <div><canvas
      ref="canvas"
      id={ Config.id || "canvas" }
      height={ Config.height }
      width={ Config.width } >
      Sorry, your browser doesn't
      support canvas
    </canvas>
 <br/>
      <div className="info">
      You're a wizard. You're on a picnic.
      <br/>
      You hear a noise...
      <br/>
      <br/>
      <a href="https://www.packtpub.com/web-development/reactjs-blueprints">
        Full source available here
      </a>
      </div>

  </div>
  }

}

module.exports = Title;
