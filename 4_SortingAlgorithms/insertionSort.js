function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let numToInsert = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > numToInsert) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = numToInsert;
  }
}

const arr = [4, -9, 7, 33, -33, 11, 5];
console.log(`unsorted array: `, arr);
insertionSort(arr);
console.log("sorted array: ", arr);
