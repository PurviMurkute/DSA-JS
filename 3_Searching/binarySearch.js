function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (target === arr[mid]) {
      return mid;
    } else if (target < arr[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7], 2));
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7], 7));
console.log(binarySearch([1, 2, 3, 4, 5, 6], 5));

// Big O - O(log n)