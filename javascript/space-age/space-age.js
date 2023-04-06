//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const EARTHYEARINSECOND = 31557600;

const PLANETORBITALPERIOD = {
  earth: EARTHYEARINSECOND,
  mercury: EARTHYEARINSECOND * 0.2408467,
  venus: EARTHYEARINSECOND * 0.61519726,
  mars: EARTHYEARINSECOND * 1.8808158,
  jupiter: EARTHYEARINSECOND * 11.862615,
  saturn: EARTHYEARINSECOND * 29.447498,
  uranus: EARTHYEARINSECOND * 84.016846,
  neptune: EARTHYEARINSECOND * 164.79132
};

export const age = (planet, seconds) => { 
  return parseFloat((seconds / PLANETORBITALPERIOD[planet]).toFixed(2)); 
}