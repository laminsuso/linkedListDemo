class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

// const node1 = new Node("Irene");
// const node2 = new Node("Kasem");
// const node3 = new Node("Amanda");

// node1.next = node3;
// node3.next = node2;
// console.log(node1);
// console.log(node2);

class SinglelinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  prepend(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  insert(index, data) {
    if (index >= this.length) {
      return this.append(data);
    }
    const newNode = new Node(data);
    const leader = this.traverseToIndex(index - 1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this;
  }
  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  remove(index) {
    if (index >= this.length) {
      return this.append(data);
    }
    const leader = this.traverseToIndex(index - 1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length--;
    return this;
  }
  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.data);
      currentNode = currentNode.next;
    }
    return array;
  }
}

const myLinkedList = new SinglelinkedList();
console.log(myLinkedList.append("Irene"));
console.log(myLinkedList.append("Kasem"));
console.log(myLinkedList.append("Amanda"));
console.log(myLinkedList.remove("Kasem"));
//console.log(myLinkedList.printList());
// console.log(myLinkedList.prepend("Kasem"));
// console.log(myLinkedList.prepend("Amanda"));
console.log(myLinkedList.insert(2, "Lamin"));
