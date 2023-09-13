class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

class LinkedList {
  #firstNode = null;
  #length = 0;
  constructor(...values) {
    this.append(...values);
  }

  append(...values) {
    values.forEach((value) => {
      if (!(value instanceof Node)) value = new Node(value);

      if (!this.#firstNode) {
        this.#firstNode = value;
      } else {
        this.tail().nextNode = value;
      }
      this.#length++;
    });
  }

  prepend(...values) {
    values.forEach((value) => {
      if (!(value instanceof Node)) value = new Node(value);
      value.nextNode = this.#firstNode;
      this.#firstNode = value;
      this.#length++;
    });
  }

  size() {
    return this.#length;
  }

  head() {
    return this.#firstNode;
  }

  tail(node = this.head()) {
    if (this.size() <= 1) return this.head();
    if (node.nextNode.nextNode === null) return node.nextNode;
    return this.tail(node.nextNode);
  }

  at(index) {
    // Prevent bad index
    if (index > this.size() || index < 0) return null;

    let node = this.head();
    for (let i = 0; true; i++) {
      if (i === index) return node;
      node = node.nextNode;
    }
  }

  pop() {
    // Do nothing if this.#length is 0
    if (this.size() === 0) return;

    let node = this.head();
    while (true) {
      if (this.size() === 1) {
        this.#firstNode = null;
        this.#length--;
        return;
      } else if (this.size() === 2) {
        this.#firstNode.nextNode = null;
        this.#length--;
        return;
      } else if (node.nextNode.nextNode === null) {
        node.nextNode = null;
        this.#length--;
        return;
      }
      node = node.nextNode;
    }
  }

  contains(value) {
    let node = this.head(),
      index = 0;
    while (node !== null) {
      if (node.value === value) return true;
      node = node.nextNode;
      index++;
    }
    return false;
  }

  find(value) {
    let node = this.head(),
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
      node = this.head();
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
    if (index > this.size() || index < 0) return;
    if (index === 0) return this.prepend(value);

    let node = this.#firstNode;
    for (let i = 0; true; i++) {
      if (i + 1 === index) {
        node.nextNode = new Node(value, node.nextNode);
        this.#length++;
        return;
      }
      node = node.nextNode;
    }
  }

  removeAt(index) {
    if (index >= this.size() || index < 0) return;
    if (index === 0) {
      this.#firstNode = this.#firstNode.nextNode;
      return;
    }

    let node = this.#firstNode;
    for (let i = 0; true; i++) {
      if (i + 1 === index) {
        node.nextNode = node.nextNode.nextNode;
        this.#length--;
        return;
      }
      node = node.nextNode;
    }
  }
}

const list = new LinkedList("head", "red", "blue", "green", "tail");
console.log(list.toString(), list.size());
