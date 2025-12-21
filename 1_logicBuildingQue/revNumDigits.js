// 123 => 321
let num = 123;

let rev = 0;

while (num > 0) {
  let last = num % 10; // 3, 2, 1
  rev = rev * 10 + last; // 3, 32, 321
  num = Math.floor(num / 10); // 12, 1
}

console.log(rev);

// Big-O = O(log n)