/** @format */

class Stack {
  #maxSize;
  #container = [];

  constructor(maxSize = 10) {
    this.#maxSize = maxSize;
  }

  push(element) {
    if (this.#isFull()) return console.log("full");
    this.#container.push(element);
  }
  pop() {
    if (this.#isEmpty()) return console.log("udah kosong!!");
    this.#container.pop();
  }

  get elements() {
    return this.#isEmpty() ? "kosong" : this.#container;
  }

  #isFull() {
    return this.#container.length >= this.#maxSize;
  }

  #isEmpty() {
    return this.#container.length === 0;
  }
}

const stack = new Stack(3);
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4); // tidak masuk karena full

stack.pop();
stack.pop();
stack.pop();
stack.pop();

console.log(stack.elements);
