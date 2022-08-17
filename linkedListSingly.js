class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

node1.next = node2;
const node1 = new Node("Irene");
const node3 = new Node("Amanda");
const node2 = new Node("Kasem");

console.log(node1);
console.log(node2);
