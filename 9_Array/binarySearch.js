function binarySearch(key, arr) {
  const n = arr.length;
  let start = 0;
  let end = n - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (key === arr[mid]) {
      return `Key element found at index ${mid}`;
    } else if (key > arr[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return 'Key element not found in given array'
}

console.log(binarySearch(4, [1, 2, 3, 4, 5, 6, 7, 8, 9]));