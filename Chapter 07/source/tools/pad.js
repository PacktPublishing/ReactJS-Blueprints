export const pad = (p = '00', s = '') => {
  return p.toString().slice(s.toString().length)+s;
}
