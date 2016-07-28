//@flow
import Game from '../engine';

const clearCanvas = (
  canvas: Object,
  gameOverImage: ImageData
) => {
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.putImageData(gameOverImage, 0, 0);
}

module.exports = clearCanvas;
