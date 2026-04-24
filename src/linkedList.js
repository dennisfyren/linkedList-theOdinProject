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
      let temp = this.head;
      this.head = null;
      this.tail = null;
      this.size--;
      return temp.value;
    }
    let temp = this.head;
    let current = this.head.next;
    this.head.next = current.next;
    this.head = current;
    this.size--;
    return temp.value;
  }
  findIndex(value) {
    if (this.head == null) return -1;
    let current = this.head;
    for (let i = 0; i < this.size; i++) {
      if (value == current.value) {
        return `${value} is at index ${i}`;
      } else {
        current = current.next;
      }
    }
    return -1;
  }
  toString() {
    if (this.head === null) return undefined;
    let string = "";
    let current = this.head;
    for (let i = 0; i < this.size; i++) {
      if (current.next == null) {
        string += `( ${i}. ${current.value}) -> ${current.next}`;
        continue;
      }
      string += `( ${i}. ${current.value}) -> `;
      current = current.next;
    }
    return string;
  }
  insertAt(index, ...values) {
    if (index < 0 || index > this.size - 1) {
      throw new RangeError("index is out of range");
    }
    values = values.reverse();
    let current = this.head;
    for (let i = 0; i <= index - 1; i++) {
      current = current.next;
    }
    values.forEach((value) => {
      const newNode = new Node(value);
      newNode.next = current.next;
      current.next = newNode;
      this.size++;
    });
  }
  removeAt(index) {
    if (index === 0) {
      this.pop();
      return;
    }
    if (index < 0 || index > this.size - 1) {
      throw new RangeError("index is out of range");
    }
    let count = 0;
    let previous;
    let current = this.head;
    for (let i = count; i <= index - 1; i++) {
      previous = current;
      current = current.next;
      count = i;
    }
    for (let i = count; i < this.size; i++) {
      let temp = current.next;
      current = previous;
      current.next = temp;
    }
    this.size--;
  }
}
