class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

class LinkedList {
  constructor() {
    this.head = new Node("head");
    this.size = 1;
  }

  get tail() {
    return this.getLast().nextNode;
  }

  append(node) {
    node.nextNode = null;
    this.getLast().nextNode = node;
    this.size++;
  }

  prepend(node) {
    node.nextNode = this.head;
    this.head = node;
    this.size++;
  }

  at(index) {
    // Prevent bad index
    if (index > this.size || index < 0) return null;

    let node = this.head;
    for (let i = 0; true; i++) {
      if (i === index) return node;
      node = node.nextNode;
    }
  }

  pop() {
    this.getLast().nextNode = null;
    this.size--;
  }

  contains(value) {
    let node = this.head,
      index = 0;
    while (node.nextNode !== null) {
      if (node.value === value) return index;
      index++;
    }
    return null;
  }

  toString() {
    let string = "",
      node = this.head;
    while (true) {
      if (node === null) {
        string += "null";
        return string;
      }
      string += `( ${node.value} ) -> `;
      node = node.nextNode;
    }
  }

  // Helper function(s)
  getLast(node = this.head) {
    // error
    if (node.nextNode.nextNode === null) return node;
    return this.getLast(list.nextNode);
  }
}

const list = new LinkedList();
list.append(new Node("flower"))
console.log(list.toString());