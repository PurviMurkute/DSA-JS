function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (target === arr[i]) {
      return i;
    }
  }
  return -1;
}

console.log(linearSearch([3, 7, 8, -2, 9, 33, 23], -2));
console.log(linearSearch([3, 7, 8, -2, 9, 33, 23], 3));
console.log(linearSearch([3, 7, 8, -2, 9, 33, 23], 88));

// TC - O(n)