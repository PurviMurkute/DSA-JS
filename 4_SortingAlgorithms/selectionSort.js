function selectionSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
    }
  }
  return arr;
}

const arr = [4, -9, 7, 33, -33, 11, 5];
console.log(`unsorted array: `, arr);
selectionSort(arr);
console.log("sorted array: ", arr);

// Big O TC - O(n^2)
// SC - O(1)