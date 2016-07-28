// @flow
const keyboard = (keys: Array<bool>) => {
window.addEventListener("keydown", (e) => {
  keys[e.keyCode] = true;
}, false);

window.addEventListener("keyup", (e) => {
  delete keys[e.keyCode];
}, false);
}
module.exports = keyboard;
