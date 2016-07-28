//@flow
import Game from '../engine';

const drawGameOver = (
  canvas: Object
) => {
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "rgb(255, 255, 255)";
  ctx.font = "20px Helvetica Neue";
  ctx.textAlign = "center";
  ctx.textBaseline = "top";
  ctx.fillText("Game Over", canvas.width/2, canvas.height/2-25);
}

module.exports = drawGameOver;
