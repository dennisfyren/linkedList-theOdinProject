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
    let nextItem = this.head.next;
    if (index === 0) return this.head.value;
    for (let i = 0; i < index - 1; i++) {
      nextItem = nextItem.next;
    }
    return nextItem.value;
  }
  contains(value) {
    for (let i = 0; i < this.size; i++) {
      if (value == this.value) {
        return true;
      } else {
        return false;
      }
    }
  }
}
