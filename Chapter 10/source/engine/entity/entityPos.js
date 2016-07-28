// @flow
const getEntityPos = (
  tileSize: number,
  pos: Object
): Object => {
  const column = Math.ceil(
    Number(pos.x / tileSize )
  );
  const row = Math.ceil(
    Number(pos.y / tileSize )
  );
  return {x: column, y: row}

}
module.exports = getEntityPos;
