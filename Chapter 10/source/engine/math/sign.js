//@flow 
//sign - denotes the additive inverse (multiplication to −1)
const sign = (n: number): number => {
  return Math.sign(n) || (n > 0 ? 1 : n == 0 ? 0 : -1);
};
module.exports = sign;
