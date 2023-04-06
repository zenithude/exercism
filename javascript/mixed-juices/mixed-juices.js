// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  switch (name) {
    case 'Pure Strawberry Joy':
      return 0.5
      break;
    case 'Energizer':
      return 1.5
      break;
    case 'Green Garden':
      return 1.5
      break;
    case 'Tropical Island':
      return 3
      break;
    case 'All or Nothing':
      return 5
      break;
    default:
      return 2.5
  }
};


/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  let quarters = 0
  let limesCount = 0
  if (wedgesNeeded === 0) { return 0 }
  while (limes.length > 0) {
    // console.log(limes, quarters, wedgesNeeded)
    let quarter = 0
    // console.log(i, quarters, wedgesNeeded)
    switch (limes[0]) {
      case 'small':
        quarter = 6;
        break;
      case 'medium':
        quarter = 8;
        break;
      case 'large':
        quarter = 10;
        break;
    }
    quarters += quarter
    limesCount += 1
    limes.shift()

    if (quarters >= wedgesNeeded) { break; }
  }
  return limesCount;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  do {
    let timeToMix = timeToMixJuice(orders[0]);
    if (timeToMix >= timeLeft) {
      orders.shift();
      break;
    } else {
      timeLeft -= timeToMix;
      orders.shift();
    } 
    
  } while (timeLeft > 0 || orders.length > 0)
  return orders
}
