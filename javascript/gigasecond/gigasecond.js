//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const ONEGIGASECOND = 10**12;


export const gigasecond = (date) => {
  let numberOfSecond = date.getTime();
  let newDate = new Date(numberOfSecond + ONEGIGASECOND)
  return newDate
};
