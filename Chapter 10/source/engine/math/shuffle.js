// @flow
const shuffle = (
  array: Array<string> 
    ): Array<string> => {
  let count = array.length;
  let rnd;
  let temp;
 while( count ){
  rnd = Math.random() * count-- | 0;
  temp = array[count];
  array[count] = array[rnd];
  array[rnd] = temp
 }
 return array;
}
module.exports = shuffle;
