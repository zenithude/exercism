/**
 * List of Nodes Double Linked
 */

export class LinkedList {
  /**
   * Initialize the list 
   */
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  /**
   * Add Node to LinkedList tail
   * 
   * @param {number} num 
   * @returns {Node}  
   */
  push(num) {
    this.length++;
    let newNode = new Node(num);
    if (this.tail) {
      // List is not empty
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
      return newNode;
    }

    this.head = this.tail = newNode;
    return newNode;
  }
  /**
   * Remove Node to LinkedList tail
   * @returns {number} value of removed Node
   */
  pop() {
    if (this.tail) {
      this.length--;
      const removedTail = this.tail;
      this.tail = this.tail.prev;
      if (this.tail) {
        this.tail.next = null;
      } else {
        this.head = null;
      }
      return removedTail.value;
    }
    return undefined;
  }
  /**
   * Remove Node to LinkedList head
   * @returns {number} value of removed Node
   */
  shift() {
    if (this.head) {
      this.length--;
      const removedHead = this.head;
      this.head = this.head.next;

      if (this.head) {
        this.head.prev = null;
      } else {
        this.tail = null;
      }
      return removedHead.value;
    }
    return undefined;
  }
  /**
   * Add Node to LinkedList head
   * 
   * @param {number} num 
   * @returns {Node}  
   */
  unshift(num) {
    this.length++;
    let newNode = new Node(num);
    if (this.head) {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
      return newNode;
    }

    this.head = this.tail = newNode;
    return newNode;
  }
  /**
   * Remove firt occurence of spécific Node in LinkedList
   * 
   * @param {number} value 
   * @returns {number} value of removed Node
   */

  delete(value) {
    if (this.isInList(value)) {
      if (this.length === 1) {
        return this.pop();
      } else if (this.length === 2) {
        if (value === this.head.value) {
          return this.shift();
        } else {
          return this.pop();
        }
      }
      this.length--;
      let previous = null;
      let current = this.head;
      let next = !current.next ? null : current.next;
      while (current.value !== value) {      
        previous = current
        current = next;
        next = current.next      
      }
      current = previous
      next.prev = previous
      previous.next = next
      return current; 
    } else {
      return undefined
    }
      
  }

  count() {
    return this.length;
  }
  /** 
   * Check if value is in list
   * 
   * @param {number} value
   * @returns {Boolean}
  */
  isInList(value) {
    let current = this.head;
    while (current) {
      if (current.value == value) {
        return true
      }
      current = current.next
    }
    return false
  }
}

/** 
 * Class Node
*/
class Node {
  /**
   * Initialisation Node
   * 
   * @param {number} value 
   */
  constructor (value) {
    this.value = value;
    this.next = null,
    this.prev = null;
  }
}