function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let pivot = arr[0];
  let left = [];
  let right = [];
  for (let i = 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}

const arr = [4, -9, 7, 33, -33, 11, 5];
console.log(`unsorted array: `, arr);
const sorted = quickSort(arr);
console.log("sorted array: ", sorted);
