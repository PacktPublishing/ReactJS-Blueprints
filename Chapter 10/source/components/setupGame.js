//@flow
import Config from '../config/index';
import Game from '../engine';

const setupGame = (
  Config: Object,
  keys: Object,
  canvas: Object,
  entities: Object,
  positions: Object
) => {
  // setup keyboard
  Game.keyboard(keys);
  // Game.mouse(canvas, Config.tileSize);
  // add player entities
  entities.players.forEach((player)=>{
    const tilePos = player.pos;

    player.pos.x = tilePos.x * Config.tileSize;
    player.pos.y = tilePos.y * Config.tileSize;
    Game.createEntity(player);
  })
}
module.exports = setupGame;
