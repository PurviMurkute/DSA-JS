function recursiveFact(n) {
  if (n == 1) return n;
  return n * recursiveFact(n - 1);
}

console.log(recursiveFact(4));
console.log(recursiveFact(6));
console.log(recursiveFact(3));

// TC- O(n)