function linearSearch(key, arr) {
  const n = arr.length;

  for (let i = 0; i < n; i++) {
    if (key === arr[i]) {
      return `Key element fornd at index ${i}`;
    }
  }
  return "Key element not found";
}

console.log(linearSearch(9, [4, 6, 9, 33, 66, 2, 5]));
console.log(linearSearch(33, [4, 6, 9, 33, 66, 2, 5]));