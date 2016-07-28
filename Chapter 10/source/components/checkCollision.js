import Game from '../engine';

const checkCollision = (
  canvas,
  player,
  monster,
  cb,
  score
) => {
  const collides = Game.bruteForce(
    player, monster, 32
  );
  if(collides) {
    score();

    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "rgb(250, 250, 250)";
    ctx.font = "12px Helvetica";
    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    ctx.fillText("Ouch", player.pos.x, player.pos.y-24);

    cb(monster, canvas);
  }
}

module.exports = checkCollision;
