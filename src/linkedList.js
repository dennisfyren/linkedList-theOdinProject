class Node {
  constructor(value = null) {
    this.value = value;
    this.next = null;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  append(value) {
    const newNode = new Node(value);
    if (this.head == null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }
  getSize() {
    return `The list has ${this.size} objects!`;
  }
  getHead() {
    if (!this.head) {
      return undefined;
    } else {
      return this.head.value;
    }
  }
  getTail() {
    if (!this.head) {
      return undefined;
    } else {
      return this.tail.value;
    }
  }
  getIndex(index) {
    if (index > this.size - 1) return undefined;
    let current = this.head;
    for (let i = 0; i <= index - 1; i++) {
      current = current.next;
    }
    return current.value;
  }
  contains(value) {
    if (this.head == null) return false;
    let current = this.head;
    for (let i = 0; i < this.size; i++) {
      if (value == current.value) {
        return true;
      } else {
        current = current.next;
      }
    }
    return false;
  }
  pop() {
    if (this.head === null) return undefined;
    if (this.size == 1) {
      this.head = null;
      this.tail = null;
      this.size--;
      return;
    }
    let current = this.head.next;
    this.head.next = current.next;
    this.head = current;
    this.size--;
  }
}
