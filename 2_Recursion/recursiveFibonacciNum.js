function recursiveFib(n) {
  if (n === 0 || n === 1) return n;

  return recursiveFib(n - 1) + recursiveFib(n - 2);
}

console.log(recursiveFib(5));
console.log(recursiveFib(1));
console.log(recursiveFib(6));

//TC - O(2^n)