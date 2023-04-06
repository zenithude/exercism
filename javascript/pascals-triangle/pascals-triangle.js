/**
 * Compute Pascal Triangle for a number of row passed.
 * 
 * @param {number} row
 * @returns {number[]} pascalTriangle
 */

export const rows = (row) => {
  let pascalTriangle = [];
  if (row <= 0) { 
    return pascalTriangle; 
  } else {
    for (let line = 0; line < row; line++) {
      pascalTriangle.push([])
      for (let i = 0; i <= line; i++) {
        pascalTriangle[line].push(binomialCoeff(line, i));
      }
    }
  }

  return pascalTriangle;
};


/** 
 * Compute Binomial Coefficient
 * 
 * @param {number} n
 * @param {number} k
 * @returns {number} result
*/
const binomialCoeff = (n, k) => {
  let result = 1;
  if (k > n) {
    k = n - k;
  }

  for (let i = 0; i < k; i++) {
    result *= (n - i);
    result /= (i + 1);
  }

  return result;
}