const arr = [4, -9, 7, 33, -33, 11, 5];
//LOGIC - 1
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

console.log(`unsorted array: `, arr);
insertionSort(arr);
console.log("logic-1 sorted array: ", arr);

//LOGIC - 2
const insertionSortAlg = (arr) => {
  const n = arr.length;
  for (let i = 1; i < n; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
};

insertionSortAlg(arr);
console.log("logic-2 sorted array: ", arr);
