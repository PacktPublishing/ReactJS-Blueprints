//@flow
import keypress from './keypress/index';

const keyInput = (
  Config: Object,
  keys: Object,
  player: Object,
  modifier: number = 1,
  addProjectile: Function,
  pushProjectile: Function,
  coolDown: number,
  setCoolDown: Function
) => {
  const { pos, speed } = player;
  let direction;

  const Shoot = (coolDown, setCoolDown)=>{
    if(coolDown<=0){
      addProjectile(
        'fire',
        player, 
        direction,
        pushProjectile
      )
      setCoolDown();
    }
  }

  if (keypress.up(keys)) {
    direction = {
      xVel: 0,
      yVel: -20
    }
    Shoot(coolDown, setCoolDown);
  }

  if (keypress.down(keys)) {
    direction = {
      xVel: 0,
      yVel: 20
    }
    Shoot(coolDown, setCoolDown);

  }

  if (keypress.left(keys)) {
    direction = {
      xVel: -20,
      yVel: 0
    }
    Shoot(coolDown, setCoolDown);
  }

  if (keypress.right(keys)) {
    direction = {
      xVel: 20,
      yVel: 0
    }
    Shoot(coolDown, setCoolDown);
  }

  if (keypress.w(keys)) {
    if(pos.y>0) pos.y -= speed *  modifier;
  }

  if (keypress.s(keys)) {
    if(pos.y < Config.height-32) pos.y += speed * modifier;
  }

  if (keypress.a(keys)) {
    if(pos.x>8) pos.x -= speed * modifier;
  }

  if (keypress.d(keys)) { 
    if(pos.x < Config.width-32)pos.x += speed * modifier;
  }

}

module.exports = keyInput;
