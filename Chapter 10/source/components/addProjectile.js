//@flow
import Game from '../engine';

const addProjectile = (
  item: string,
  player: Object,
  direction: Object,
  pushProjectile: Function
) => {
  let projectile = {
    name: item,
    image: `${item}.png`,
    width: 32,
    height: 32,
    pos:{
      x: player.pos.x,
      y: player.pos.y
    },
    direction: direction,
    speed: 10
  };
  Game.createEntity(projectile);
  pushProjectile(projectile);
}
module.exports = addProjectile;
