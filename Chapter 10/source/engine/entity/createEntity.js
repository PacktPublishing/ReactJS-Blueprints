// @flow
import drawEntity from './drawEntity';

module.exports = (
  entity: Object
) => {
  // provide entity with an ID
  entity.id=Math.random()*2;
  // flag it so we don't try to create
  // the entity twice
  entity._creating=true;
  let entityImage = new Image();
  entityImage.src = entity.image;
  entityImage.onload = () => {
    entity._sprite = entityImage;
  };
}
