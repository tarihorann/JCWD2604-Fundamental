/** @format */

class Queue {
  #container = [];

  enqueue(element) {
    this.#container.push(element);
  }

  dequeue() {
    this.#container.shift();
  }

  get elements() {
    return this.#container;
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

queue.dequeue();
queue.dequeue();
queue.enqueue(4);
queue.dequeue();

console.log(queue.elements);
