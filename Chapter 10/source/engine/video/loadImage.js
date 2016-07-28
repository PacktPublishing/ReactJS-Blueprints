// @flow
const setImage = (ctx: Object, image: Image) => {
    ctx.drawImage(image, 0, 0);
}

const loadImage = (canvas: Object, image: string) => {
  let bgImage = new Image();
  bgImage.src = image;
  bgImage.onload = () => {
    setImage(canvas.getContext("2d"), bgImage)
  };
}
module.exports = loadImage;
