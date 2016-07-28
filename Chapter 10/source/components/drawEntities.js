//@flow
import Game from '../engine';
const drawEntities = (
  Config: Object,
  canvas: Object,
  entities: Object
) => {
  // Draw all entities
  Game.loadImage(
    canvas,
    Config.backgrounds.game
  );

  entities.projectiles.forEach((item)=>{
    Game.drawEntity(canvas, item);
  })

  entities.monsters.forEach((monster)=>{
    Game.drawEntity(canvas, monster);
  })

  entities.players.forEach((player)=>{
    Game.drawEntity(canvas, player);
  })

}
module.exports = drawEntities;
