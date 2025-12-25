function sumOfN(n) {
  if (n === 0) return 0;

  return n + sumOfN(n - 1);
}

console.log(sumOfN(5));
console.log(sumOfN(10));
console.log(sumOfN(3));

// TC - O(n)