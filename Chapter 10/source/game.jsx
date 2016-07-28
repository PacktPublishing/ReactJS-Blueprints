import './style.scss';
import polyfill from './polyfills';
import Config from './config/index';
import React, { Component, PropTypes } from 'react';
import Game from './engine';
import SetupGame from './components/setupGame';
import KeyInput from './components/keyInput';
import DrawHUD from './components/drawHud';
import DrawGameOver from './components/drawGameOver';
import DrawGameWon from './components/drawGameWon';
import DrawEntities from './components/drawEntities';
import GameOverCanvas from './components/gameOverCanvas';
import CheckCollision from './components/checkCollision';
import OutOfBounds from './components/outOfBounds';
import AddProjectile from './components/addProjectile';
import AddEntity from './components/addEntity';
import RemoveEntity from './components/removeEntity';

class MyGame extends Component {
  constructor(){
    super();
    this.lastTime = Date.now();
    this.keys={};
    this.gameOver=false;
    this.gameWon=false;
    this.maxMonsters=3;
    this.level=0;
    this.beast=Config.beasts[0],
    this.state={};
    this.returnToTitleScreen=150;
    this.score = 0;
    this.entities= Config.entities;
    this.current_spell = null;
    this.current_player_no = 0;
    this.current_player = this.entities.players[0];
    this.state.player = this.current_player;
    this.current_player.health=100;
    this.current_player.pos={x:8, y:8};
    this.coolDown=0;
  }

  updateGame(modifier){
    if(typeof this.refs.canvas ==="undefined")
      return;

    const { canvas } = this.refs;
    const ctx = canvas.getContext("2d");

    if(this.gameOver){
      GameOverCanvas(canvas, this.gameOverImage);
      if(this.gameWon)
        DrawGameWon(canvas);
      else
        DrawGameOver(canvas);
      --this.returnToTitleScreen;
      if(this.returnToTitleScreen<=0)
        this.props.cb('title');
      return;
    }

    const player = this.entities.players[
      this.current_player_no
    ];

    DrawEntities(Config, canvas, this.entities);

    DrawHUD(canvas, this.score, player.health);

    this.coolDown-=0.1;

    KeyInput(
      Config,
      this.keys,
      player,
      1,
      AddProjectile.bind(this),
      (item) => this.entities.projectiles.push(item),
        this.coolDown,
      _ => this.coolDown = 1.5
    );

    // move projectiles each tick
    this.entities.projectiles.forEach((item)=>{
      item.pos.x+= item.direction.xVel;
      item.pos.y+= item.direction.yVel;

      this.entities.monsters.forEach((monster)=>{

        if(Game.bruteForce(
          item, monster, Config.tileSize/2
        )){
          monster.health-=20;

          this.entities.projectiles =
            RemoveEntity(
              this.entities.projectiles,
              item,
              _ => {}
          );

          if(monster.health<=0){
            this.entities.monsters =
              RemoveEntity(
                this.entities.monsters,
                monster,
                _ => { this.score++}
            );
          }
        }
      })

      if(OutOfBounds(
        item,
      {h:Config.height,w:Config.width},
      Config.tileSize
      )){
        this.entities.projectiles =
          RemoveEntity(
            this.entities.projectiles,
            item,
            _ => {}
        );
      }
    })

    // move monsters each tick
    this.entities.monsters.forEach((monster)=>{
      if(Game.bruteForce(monster, player, 64)){
        Game.targetEntity(
          monster,
          player,
          monster.speed
        )
      }
      Game.randomMove(
        monster,
        monster.speed,
        Config
      )

      CheckCollision(
        canvas, player,
        monster,
        _ => {player.health-=1},
          _ => {}
      );
    })


    if(!this.gameOver && this.level<=14){
      if(this.entities.monsters.length<=0){
        ++this.level;
        this.beast=Config.beasts[this.level-1];
        this.setState({
          level: this.level,
          beast: this.beast
        })
        this.maxMonsters=this.level+3;
      }

      if(this.beast && this.maxMonsters>0){
        --this.maxMonsters;
        AddEntity(
          this.beast,
          {
            x: Game.shuffle([64,256,480])[0],
            y: Game.shuffle([-32,520])[0]
          },
          20+this.score,
          1+Math.random()*this.score/10,
          (item) => this.entities.monsters.push(item)
        )
      }
    }

    if(this.level>14) {
      this.gameWon=true;
      this.returnToTitleScreen = 400;
      this.gameOver=true;
    }

    if(player.health<0 || this.gameWon){
      this.gameOverImage = 
        ctx.getImageData(
          0, 0, canvas.width, canvas.height
      );
      this.entities.monsters=[];
      this.entities.projectiles=[];
      this.gameOver = true;
    }

  }

  componentDidMount(){
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext("2d");

    this.level=13;
    this.setState({
      score: 0,
      level: 0,
      beast: Config.beasts[0]
    })

    SetupGame(
      Config, this.keys, this.refs.canvas,
      this.entities, this.positions
    );

    const gameLoop = () =>{
      var now = Date.now();
      var delta = (now - this.lastTime) / 1000.0;
      this.updateGame(delta);
      this.last = now;
      window.requestAnimationFrame(gameLoop);
    }

    gameLoop();

  }

  getCurrentplayer() {
    return this.current_player.name
  }

  render(){
    return <div>
      <canvas
        ref="canvas"
        id={ Config.id || "canvas" }
        height={ Config.height }
        width={ Config.width } >
        Sorry, your browser doesn't
        support canvas
      </canvas>
      <br/>
      <div className="info">
        Player: {this.getCurrentplayer()}
        &nbsp;
        Level: {this.level}
      </div>

    </div>
  }
}

module.exports = MyGame;
