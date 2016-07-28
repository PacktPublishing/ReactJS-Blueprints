//@flow
import Game from '../engine';

const drawHUD= (
  canvas: Object,
  score: number = 0,
  health: number = 100
) => {
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "rgb(250, 250, 250)";
  ctx.font = "20px Helvetica Neue";
  ctx.textAlign = "left";
  ctx.textBaseline = "top";
  ctx.fillText("SCORE: " + score, 25, 25);
  ctx.textAlign = "right";
  ctx.fillText("Health: " + health, canvas.width-35, 25);
}

module.exports = drawHUD;
