class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

const node1 = new Node("Irene");
const node2 = new Node("Kasem");
const node3 = new Node("Amanda");

node1.next = node2;
node2.next = node3;
node2.prev = node1;
console.log(node1);
console.log(node2);
