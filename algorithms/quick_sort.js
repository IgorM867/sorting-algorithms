const { swap } = require("../lib");

function quickSort(array, left = 0, right = array.length - 1, isRecursion = false) {
  const sortedArray = isRecursion ? array : [...array];

  let i = left - 1;
  let j = right + 1;
  const pivot = sortedArray[Math.floor((left + right) / 2)];

  while (true) {
    do {
      i++;
    } while (pivot > sortedArray[i]);
    do {
      j--;
    } while (pivot < sortedArray[j]);
    if (i <= j) {
      swap(sortedArray, i, j);
    } else {
      break;
    }
  }
  if (j > left) {
    quickSort(sortedArray, left, j, true);
  }
  if (i < right) {
    quickSort(sortedArray, i, right, true);
  }
  return sortedArray;
}

module.exports = quickSort;
