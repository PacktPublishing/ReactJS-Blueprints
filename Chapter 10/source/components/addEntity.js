//@flow
import Game from '../engine';
let directions = [1, -1];

const addEntity = (
  item: string,
  pos: Object,
  health: number = 60,
  speed: number = 1,
  callback: Function
) => {
  let entity = {
    name: item,
    image: `${item}.png`,
    width: 32,
    height: 32,
    health: health,
    pos:{
      x: pos.x,
      y: pos.y
    },
    vel:{
      x: Game.shuffle(directions)[0],
      y: Game.shuffle(directions)[0]
    },
    tick: 50,
    direction: Game.shuffle(["x","y"])[0],
    speed: speed+(Math.random()*1)
  };
  Game.createEntity(entity);
  callback(entity);
}
module.exports = addEntity;
