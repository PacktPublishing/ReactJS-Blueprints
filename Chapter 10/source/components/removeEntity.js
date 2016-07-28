//@flow
const removeEntity = (
  entities: Array<any>,
  item: Object,
  callback: Function
): Array<any> =>{
  callback();
  return entities =
    entities.filter((p)=>{
    return p.id !== item.id
  })
}
module.exports = removeEntity;
