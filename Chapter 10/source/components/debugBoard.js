const debugBoard = (
  canvas,
  width,
  height,
  tileSize
) => {
    let bw = width;
    let bh = height;
    let p = 0;
    let cw = bw + (p*2) + 1;
    let ch = bh + (p*2) + 1;

    let context = canvas.getContext("2d");
    function drawBoard(){
    for (let x = 0; x <= bw; x += tileSize) {
        context.moveTo(0.5 + x + p, p);
        context.lineTo(0.5 + x + p, bh + p);
    }

    for (let x = 0; x <= bh; x += tileSize) {
        context.moveTo(p, 0.5 + x + p);
        context.lineTo(bw + p, 0.5 + x + p);
    }

    context.strokeStyle = "gray";
    context.stroke();
    }

    drawBoard();
  }
module.exports = debugBoard;
