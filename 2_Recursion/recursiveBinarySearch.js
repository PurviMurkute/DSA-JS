function recursiveBinarySearch(arr, target) {
  return search(arr, target, 0, arr.length - 1);
}

function search(arr, target, start, end) {
  if (start > end) return -1;

  let mid = Math.floor((start + end) / 2);

  if (target === arr[mid]) return mid;

  if (target < arr[mid]) {
    return search(arr, target, start, mid - 1);
  } else {
    return search(arr, target, mid + 1, end);
  }
}

console.log(recursiveBinarySearch([-3, 1, 2, 3, 4, 5, 6, 7], 5));
console.log(recursiveBinarySearch([-3, 1, 2, 3, 4, 5, 6, 7], 2));
console.log(recursiveBinarySearch([-3, 1, 2, 3, 4, 5, 6, 7], 9));
