//@flow
const outOfBounds = (
  item: Object = {pos: {x: 160, y: 160}},
  bounds: Object = {height: 16, width: 16},
  tileSize: number = 32
): bool => {
  if( item.pos.y< -tileSize ||
     item.pos.x< -tileSize ||
     item.pos.y > bounds.height+tileSize ||
     item.pos.x > bounds.width+tileSize
    ){
    return true;
  }
  return false;
}
module.exports = outOfBounds;
