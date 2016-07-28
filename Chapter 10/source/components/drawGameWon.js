//@flow
import Game from '../engine';

const drawGameWon = (
  canvas: Object
) => {
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "rgb(255, 255, 255)";
  ctx.font = "24px Helvetica Neue";
  ctx.textAlign = "center";
  ctx.textBaseline = "top";
  ctx.fillText("You won!", canvas.width/2, canvas.height/2-25);
  ctx.font = "20px Helvetica Neue";
  ctx.fillText("You can finally enjoy your picnic!", canvas.width/2, canvas.height/2);
}

module.exports = drawGameWon;
