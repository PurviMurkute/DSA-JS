function cartesianProduct(arr1, arr2) {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      result.push([arr1[i], arr2[j]]);
    }
  }
  return result;
}

const arr1 = [1, 2];
const arr2 = ['a', 'b', 'c'];
const product = cartesianProduct(arr1, arr2);
console.log('Cartesian Product:', product); // Output: [[1, 'a'], [1, 'b'], [1, 'c'], [2, 'a'], [2, 'b'], [2, 'c']]

// Big O - O(n*m) where n and m are the lengths of arr1 and arr2 respectively