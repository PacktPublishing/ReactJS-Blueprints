import { players, names } from './players';
import { beasts } from './beasts';
import Shuffle from '../engine/math/shuffle';

let config =  {
  tileSize: 32,
  height: 512,
  width: 512,
  debug: true,
  beasts: beasts,
  backgrounds: {
    title: '/title.png',
    game: '/board512_grass.png'
  },
  entities: {
    players : [],
    projectiles: [],
    monsters: [],
    pickups: [],
    enemies: []
  }
}

config.entities.players.push({
  name: Shuffle(names).pop(),
  image: Shuffle(players).pop(),
  health: 100,
  width: 32,
  height: 32,
  pos:{
    x: 8,
    y: 8
  },
  speed: 5
})

module.exports = config;
