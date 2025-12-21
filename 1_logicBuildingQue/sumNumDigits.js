// 123 => 6
let num = 123;

let sum = 0;

while (num > 0) {
  let last = num % 10;
  sum = sum + last;
  num = Math.floor(num / 10);
}

console.log(sum);

// Big-O = O(log n)