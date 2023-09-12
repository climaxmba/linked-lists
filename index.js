class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

class LinkedList {
  constructor() {
    this.head = new Node("HEAD");
    this.size = 1;
  }

  get tail() {
    return this.getLast();
  }

  append(...values) {
    values.forEach((value) => {
      if (!(value instanceof Node)) value = new Node(value);
      if (!this.head) {
        this.head = value;
      } else {
        this.getLast().nextNode = value;
      }
      this.size++;
    });
  }

  prepend(...values) {
    values.forEach((value) => {
      if (!(value instanceof Node)) value = new Node(value);
      value.nextNode = this.head;
      this.head = value;
      this.size++;
    });
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
    // Do nothing if this.size is 0
    if (this.size === 0) return;

    let node = this.head;
    while (true) {
      if (this.size === 1) {
        this.head = null;
        this.size--;
        return;
      } else if (this.size === 2) {
        this.head.nextNode = null;
        this.size--;
        return;
      } else if (node.nextNode.nextNode === null) {
        node.nextNode = null;
        this.size--;
        return;
      }
      node = node.nextNode;
    }
  }

  contains(value) {
    let node = this.head,
      index = 0;
    while (node !== null) {
      if (node.value === value) return true;
      node = node.nextNode;
      index++;
    }
    return false;
  }

  find(value) {
    let node = this.head,
      index = 0;
    while (node !== null) {
      if (node.value === value) return index;
      node = node.nextNode;
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
  
  insertAt(value, index) {
    if (index > this.size || index < 0) return;
    if (index === 0) return this.prepend(value);

    let node = this.head;
    for (let i = 0; true; i++) {
      if (i + 1 === index) {
        node.nextNode = new Node(value, node.nextNode);
        this.size++;
        return;
      }
      node = node.nextNode;
    }
  }

  removeAt(index) {
    if (index >= this.size || index < 0) return;
    if (index === 0) {
      this.head = this.head.nextNode;
      return;
    }

    let node = this.head;
    for (let i = 0; true; i++) {
      if (i + 1 === index) {
        node.nextNode = node.nextNode.nextNode;
        this.size--;
        return;
      }
      node = node.nextNode;
    }
  }

  // Helper function(s)
  getLast(node = this.head) {
    if (this.size <= 1) return this.head;
    if (node.nextNode.nextNode === null) return node.nextNode;
    return this.getLast(node.nextNode);
  }
}
