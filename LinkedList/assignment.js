class Node {
    constructor(value) {
      this.value = value;
      this.nextNode = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    append(value) {
      const newNode = new Node(value);
      if (!this.head) {
        this.head = newNode;
        return;
      }
  
      let current = this.head;
      while (current.nextNode) {
        current = current.nextNode;
      }
  
      current.nextNode = newNode;
    }
  
    prepend(value) {
      const newNode = new Node(value);
      newNode.nextNode = this.head;
      this.head = newNode;
    }
  
    size() {
      let count = 0;
      let current = this.head;
      while (current) {
        count++;
        current = current.nextNode;
      }
      return count;
    }
  
    head() {
      return this.head;
    }
  
    tail() {
      let current = this.head;
      while (current && current.nextNode) {
        current = current.nextNode;
      }
      return current;
    }
  
    at(index) {
      if (index < 0 || index >= this.size()) {
        return null;
      }
  
      let current = this.head;
      for (let i = 0; i < index; i++) {
        current = current.nextNode;
      }
      return current;
    }
  
    pop() {
      if (!this.head) {
        return null;
      }
  
      if (!this.head.nextNode) {
        const removedValue = this.head.value;
        this.head = null;
        return removedValue;
      }
  
      let current = this.head;
      while (current.nextNode.nextNode) {
        current = current.nextNode;
      }
  
      const removedValue = current.nextNode.value;
      current.nextNode = null;
      return removedValue;
    }
  
    contains(value) {
      let current = this.head;
      while (current) {
        if (current.value === value) {
          return true;
        }
        current = current.nextNode;
      }
      return false;
    }
  
    find(value) {
      let current = this.head;
      let index = 0;
      while (current) {
        if (current.value === value) {
          return index;
        }
        current = current.nextNode;
        index++;
      }
      return null;
    }
  
    toString() {
      let result = '';
      let current = this.head;
      while (current) {
        result += `(${current.value}) -> `;
        current = current.nextNode;
      }
      result += 'null';
      return result;
    }
  
    insertAt(value, index) {
      if (index < 0 || index > this.size()) {
        return false;
      }
  
      if (index === 0) {
        this.prepend(value);
        return true;
      }
  
      const newNode = new Node(value);
      let current = this.head;
      for (let i = 0; i < index - 1; i++) {
        current = current.nextNode;
      }
      newNode.nextNode = current.nextNode;
      current.nextNode = newNode;
      return true;
    }
  
    removeAt(index) {
      if (index < 0 || index >= this.size()) {
        return null;
      }
  
      if (index === 0) {
        const removedValue = this.head.value;
        this.head = this.head.nextNode;
        return removedValue;
      }
  
      let current = this.head;
      for (let i = 0; i < index - 1; i++) {
        current = current.nextNode;
      }
      const removedValue = current.nextNode.value;
      current.nextNode = current.nextNode.nextNode;
      return removedValue;
    }
  }
  
  // Test the LinkedList class
  const linkedList = new LinkedList();
  linkedList.append(10);
  linkedList.append(20);
  linkedList.append(30);
  console.log(linkedList.toString()); // Output: (10) -> (20) -> (30) -> null
  
  linkedList.prepend(5);
  console.log(linkedList.toString()); // Output: (5) -> (10) -> (20) -> (30) -> null
  
  console.log(linkedList.size()); // Output: 4
  
  console.log(linkedList.head()); // Output: Node { value: 5, nextNode: Node { value: 10, nextNode: [Node] } }
  
  console.log(linkedList.tail()); // Output: Node { value: 30, nextNode: null }
  
  console.log(linkedList.at(2)); // Output: Node { value: 20, nextNode: Node { value: 30, nextNode: null } }
  
  console.log(linkedList.pop()); // Output: 30
  
  console.log(linkedList.contains(20)); // Output: true
  
  console.log(linkedList.find(10)); // Output: 1
  
  linkedList.insertAt(25, 1);
  console.log(linkedList.toString()); // Output: (5) -> (25) -> (10) -> (20) -> null
  
  console.log(linkedList.removeAt(2)); // Output: 10
  
  console.log(linkedList.toString()); // Output: (5) -> (25) -> (20) -> null
  
