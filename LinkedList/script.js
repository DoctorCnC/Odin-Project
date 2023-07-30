// Node class
class Node {
  constructor(value) {
    this.value = value;
    this.nextNode = null;
  }
}

// LinkedList class
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.nextNode = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  prepend(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.nextNode = this.head;
      this.head = newNode;
    }
    this.size++;
  }

  getSize() {
    return this.size;
  }

  getHead() {
    return this.head;
  }

  getTail() {
    return this.tail;
  }

  at(index) {
    if (index < 0 || index >= this.size) {
      return null;
    }

    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.nextNode;
    }

    return currentNode;
  }

  pop() {
    if (!this.head) {
      return null;
    }

    if (this.size === 1) {
      const removedNode = this.head;
      this.head = null;
      this.tail = null;
      this.size = 0;
      return removedNode;
    }

    let currentNode = this.head;
    while (currentNode.nextNode !== this.tail) {
      currentNode = currentNode.nextNode;
    }

    const removedNode = currentNode.nextNode;
    currentNode.nextNode = null;
    this.tail = currentNode;
    this.size--;
    return removedNode;
  }

  contains(value) {
    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.nextNode;
    }
    return false;
  }

  find(value) {
    let currentNode = this.head;
    let index = 0;
    while (currentNode !== null) {
      if (currentNode.value === value) {
        return index;
      }
      currentNode = currentNode.nextNode;
      index++;
    }
    return null;
  }

  toString() {
    let currentNode = this.head;
    let result = '';
    while (currentNode !== null) {
      result += `(${currentNode.value}) -> `;
      currentNode = currentNode.nextNode;
    }
    return result + 'null';
  }
}

// Example usage:
const linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.prepend(0);

console.log(linkedList.getSize()); // Output: 4
console.log(linkedList.toString()); // Output: (0) -> (1) -> (2) -> (3) -> null
console.log(linkedList.contains(2)); // Output: true
console.log(linkedList.find(3)); // Output: 3
