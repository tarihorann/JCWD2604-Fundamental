/** @format */

const list = {
  head: {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null,
        },
      },
    },
  },
};

console.log(list);

class Node {
  constructor(element, next) {
    this.element = element;
    this.next = next;
  }
}

class LinkedList {
  head = null;
  size = 0;

  print() {
    let curr = this.head;
    while (curr) {
      console.log(curr.element);
      curr = curr.next;
    }
  }

  add(element) {
    let node = new Node(element); // { value : 1, next : null}
    let current;
    if (this.head == null) {
      this.head = node;
    } else {
      current = this.head; // deep copy

      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  insertAt(element, index) {
    if (index < 0 || index > this.size)
      return console.log("please enter a valid index");

    const node = new Node(element);
    let curr = this.head;

    if (index == 0) {
      node.next = this.head;
      this.head = node;
    } else {
      let prev;

      for (let i = 0; i < index; i++) {
        prev = curr;
        curr = curr.next;
      }

      prev.next = node;
      node.next = curr;
    }
    this.size++;
  }

  removeAt(index) {
    if (index < 0 || index > this.size)
      return console.log("please enter a valid index");
    if (index == 0) {
      this.head = curr.next;
    } else {
      let curr = this.head;

      let prev = curr;
      for (let i = 0; i < index; i++) {
        prev = curr;
        curr = curr.next;
      }

      prev.next = curr.next;
    }
    this.size--;
  }

  indexOf(element) {
    let count = 0;
    let current = this.head;

    while (current != null) {
      if (current.element === element) {
        return count;
      }
      count += 1;
      current = current.next;
    }
    return -1;
  }
}

const ll = new LinkedList();

ll.add(1);
ll.add(2);
ll.add(3);
ll.insertAt(2.5, 2);

ll.removeAt(2);

console.log(ll);
ll.print();

// const ll = {
//   head: {
//     value: 1,
//     next: {
//       value: 2,
//       next: {
//         value:3 ,
//         next : null
//       },
//     },
//   },
// };
// element3 = {
//   value: 3,
//   next: null,
// };
// current = head
// current = {
//     value: 1,
//     next: {
//       value: 2,
//       next: null,
//     },
//   }

// current = {
//     value: 2,
//     next: {
//         value: 3,
//         next: null,
//       }
//   }
//   current.next ?

//   current.next = element3

//   this.head.next = {
//     value: 2,
//     next: {
//         value: 3,
//         next: null,
//       }
//   }
