// @flow
import shuffle from '../math/shuffle';
const randomMove = (
  entity: Object,
  speed: number = 1,
  Config: Object = {
    height: 512,
    width: 512,
    tileSize: 32
  }
) => {
  let {pos, vel} = entity;
  let speedX, speedY;

  entity.tick-=1;

  let direction = ["x","y"];

  if(entity.tick<=0){
    entity.direction = shuffle(direction)[0];
    entity.tick=Math.random()*50;
  }

  if(pos.x + vel.x >Config.width - Config.tileSize *2){
    vel.x=-speed;
  }
  if(pos.x + vel.x < Config.tileSize/2){
    vel.x=speed;
  }

  if(pos.y + vel.y > Config.height- Config.tileSize * 2){
    vel.y=-speed;
  }
  if(pos.y + vel.y < Config.tileSize/2){
    vel.y=speed;
  }

  entity.pos.x+= entity.direction==="x" ? vel.x: 0;
  entity.pos.y+= entity.direction==="y" ? vel.y: 0;
};
module.exports = randomMove;
