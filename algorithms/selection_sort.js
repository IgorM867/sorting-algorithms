const { swap } = require("../lib");

function selectionSort(array) {
  const sortedArray = [...array];

  for (let i = 0; i < sortedArray.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < sortedArray.length; j++) {
      if (sortedArray[j] < sortedArray[min]) {
        min = j;
      }
    }
    if (min != i) {
      swap(sortedArray, i, min);
    }
  }
  return sortedArray;
}

module.exports = selectionSort;
