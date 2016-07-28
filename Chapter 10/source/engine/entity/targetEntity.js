// @flow
import sign from '../math/sign';

const targetEntity = (
  entityA: Object,
  entityB: Object,
  speed: number
) => {
  var posA = entityA.pos;
  var posB = entityB.pos;
  var velX = sign(posB.x - posA.x) * speed;
  var velY = sign(posB.y - posA.y) * speed;
  entityA.pos.x+=velX;
  entityA.pos.y+=velY;
};
module.exports = targetEntity;
