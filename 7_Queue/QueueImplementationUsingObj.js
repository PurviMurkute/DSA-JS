class Queue {
  constructor() {
    this.items = {};
    this.rear = 0;
    this.front = 0;
  }

  enqueue(ele) {
    this.items[this.rear] = ele;
    this.rear++;
  }

  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty, cannot perform dequeue";
    }
    const deletedItem = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return deletedItem;
  }

  peek() {
    if (this.isEmpty()) {
      return "Queue is empty, cannot perform peek";
    }
    return this.items[this.front];
  }

  isEmpty() {
    return this.rear - this.front === 0;
  }

  size() {
    return this.rear - this.front;
  }
}

const queue = new Queue;

console.log(queue.isEmpty());  //true
console.log(queue.size());  //0
console.log(queue.peek());  //Queue is empty, cannot perform peek

queue.enqueue(55);
queue.enqueue(5);
queue.enqueue(52);
queue.enqueue(3);
console.log(queue.isEmpty());   //false
console.log(queue.size());  //4
console.log(queue.peek());  //55

console.log(queue.dequeue());   //55
console.log(queue.isEmpty());   //false
console.log(queue.size());   //3
console.log(queue.peek());   //5