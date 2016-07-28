// @flow
import createEntity from './createEntity';

module.exports = (
  canvas: Object,
  entity: Object
) => {
  if(entity._creating && !entity._sprite){
    return 0;
  }
  else if(!entity._sprite){
    createEntity(canvas, entity);
  }
  else {
    // draw the sprite as soon as the image
    // is ready
    var ctx = canvas.getContext("2d");
    ctx.drawImage(
      entity._sprite,
      entity.pos.x,
      entity.pos.y
    );
  }
}
