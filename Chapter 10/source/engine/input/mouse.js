// @flow

const getEntityPos = require('../entity/entityPos');

const getMousePos = (canvas: Object, e: Object): Object => {
  const rect = canvas.getBoundingClientRect();
  return {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top
  };
}

const mouse = (canvas: Object, tileSize: number) => {
  canvas.addEventListener('mousemove', function(e) {
    const mousePos = getMousePos(canvas, e);
    const entityPos = getEntityPos(tileSize, mousePos);
    const message = 'Tile: ' + entityPos.x+ ',' + entityPos.y;
    console.log(message);
  }, false);

}
module.exports = mouse;

