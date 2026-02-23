class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(ele) {
    this.items.push(ele);
  }

  dequeue() {
    if (this.items.isEmpty) {
      return "Queue is empty";
    }
    this.items.shift();    //it makes TC linear
  }

  peek() {
    if (this.isEmpty()) {
      return "items is empty";
    }
    return this.items[0];
  }

  isEmpty() {
    if (this.size() === 0) {
      return true;
    }
    return false;
  }

  size() {
    return this.items.length;
  }

  printQueue() {
    return this.items.map((item) => item);
  }
}

const queue = new Queue();

queue.enqueue(3);
queue.enqueue(8);
queue.enqueue(99);
queue.enqueue(34);
queue.enqueue(44);

console.log(queue.printQueue());
console.log(queue.size());  //5
console.log(queue.peek());  // 3

queue.dequeue();
console.log(queue.printQueue());
console.log(queue.size());  //4
console.log(queue.peek());  //8