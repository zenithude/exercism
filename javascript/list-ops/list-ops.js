//
// This is only a SKELETON file for the 'List Ops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class List {
  /** Initialize List
   * 
   * @param {*} values 
  **/
  constructor(values = []) {
    this.values = values;
  }
  /** Add all items in list2 to the end of list1
   * 
   * @param {List} list
   * @returns {List}
  **/
  append(list) {
    this.values = [...this.values, ...list.values]
    return this;
  }
  /** Combine all items in all lists into one flattened list
   * 
   * @param {List} allList
  **/
  concat(allList) {
    // Create and initialize new List with current values
    const newList = new List(this.values);
    // Each values in allList append in newList
    allList.values.forEach((list) => newList.append(list));
    return newList;
  }
  /** _given a predicate and a list, return the list of all items for which `predicate(item)` is True
   * 
   * @param {*} predicate
   * @returns {List}
  */
 filter (predicate) {
    let newList = [];
    for (let value of this.values) {
      if (predicate(value)) {
        newList.push(value);
      }      
    }
    return new List(newList);
 }
  /** given a function and a list, 
   * return the list of the results of applying :
   * `function(item)` on all items
   * 
   * @param {Function} func
   * @returns {List} 
  **/
  map(func) {
    // create and initialize an mapped array
    const mapped = [];
    // For each values in current List object
    for (const val of this.values) {
      mapped.push(func(val));
    }
    // Return a new List object with mapped array
    return new List(mapped);
  }
  /** Gives length of values in current object 
   * 
   * @returns {number}
  **/
  length() {
    return this.values.length;
    
  }
  /** given a function, a list, and initial accumulator, 
   * fold (reduce) each item into the accumulator from 
   * the left using `function(accumulator, item)` 
   * 
   * @param {Function} func
   * @param {number} val
   * @returns {number} 
   **/
  foldl(func, val) {
    // Create and initialize accumulator with val value
    let accumulator = val;
    for (let value of this.values) {
      accumulator = func(accumulator, value);
    }
    return accumulator;
  }
  /** given a function, a list, and initial accumulator, 
   * fold (reduce) each item into the accumulator from 
   * the right using `function(accumulator, item)` 
   * @param {Function} func
   * @param {number} val
   * @returns {number} 
   **/
  foldr(func, val) {
    let accumulator = val;
    for (let index = this.values.length - 1; index >= 0; index--) {
      accumulator = func(accumulator, this.values[index]);
    }
    return accumulator;
  }
  /** given a list, return a list with all the original items, but in reversed order
   * 
   * @returns {List} 
  **/
  reverse() {
    let reversed = [];
    for (let index = this.values.length - 1; index >= 0; index--) {
      reversed.push(this.values[index]);
    }
    return new List(reversed);
  }
}
