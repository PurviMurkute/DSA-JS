// Basic stack implementation

class Stack {
  constructor() {
    this.items = [];
  }

  push(ele) {
    this.items.push(ele);
  }

  pop() {
    if (this.isEmpty()) {
      return "Stack is Empty, cannot perform pop operation";
    }
    return this.items.pop();
  }

  peek() {
    if (this.isEmpty()) {
      return "Stack is Empty, cannot perform peek operation";
    }
    return this.items[this.size() - 1];
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

  print() {
    if (this.isEmpty()) return "Stack is empty";
    return this.items.forEach((x) => console.log("values are :", x));
  }
}

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.peek()); // 3
console.log(stack.print());
console.log(stack.pop()); // 3
console.log(stack.pop()); // 2
console.log(stack.pop()); // 1
console.log(stack.peek()); //Stack is Empty, cannot perform peek operation
console.log(stack.pop()); //Stack is Empty, cannot perform pop operation
