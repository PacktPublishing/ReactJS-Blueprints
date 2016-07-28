const loadImage = require('./video/loadImage');
const clear = require('./video/clear');
const drawEntity = require('./entity/drawEntity');
const createEntity = require('./entity/createEntity');
const targetEntity = require('./entity/targetEntity');
const sign = require('./math/sign');
const bruteForce = require('./collision/bruteForce');
const keyboard = require('./input/keyboard');
const shuffle = require('./math/shuffle');
const mouse = require('./input/mouse');
const getEntityPos = require('./entity/entityPos');
const randomMove= require('./entity/randomMove');

module.exports = {
  loadImage,
  clear,
  randomMove,
  createEntity,
  drawEntity,
  getEntityPos,
  targetEntity,
  sign,
  shuffle,
  bruteForce,
  mouse,
  keyboard
}
