// @flow
module.exports = (
  entityA: Object = {pos: {x:0, y:0}},
  entityB: Object = {pos: {x:0, y:0}},
  size: number = 32
): bool => {
  return (
    entityA.pos.x <=
      (entityB.pos.x + size)
    && entityB.pos.x <=
      (entityA.pos.x + size)
    && entityA.pos.y <=
      (entityB.pos.y + size)
    && entityB.pos.y <=
      (entityA.pos.y + size)
  )
}
