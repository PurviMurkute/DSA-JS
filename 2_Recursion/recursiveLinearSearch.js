function recursiveLinearSearch(arr, target) {
  return lSearch(arr, target, 0, arr.length);
}

function lSearch(arr, target, index, size) {
    if (index === size) return -1;

    if (target === arr[index]) return index;

    return lSearch(arr, target, index + 1, size);
  }

console.log(recursiveLinearSearch([8, -1, 3, 7, 9, 4, 6], 9));
console.log(recursiveLinearSearch([8, -1, 3, 7, 9, 4, 6], -1));
console.log(recursiveLinearSearch([8, -1, 3, 7, 9, 4, 6], 77));

// Big O - O(n)