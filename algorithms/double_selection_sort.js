const { swap } = require("../lib");

function doubleSelectionSort(array) {
  const sortedArray = [...array];

  for (let i = 0; i < Math.floor(sortedArray.length / 2); i++) {
    const pointerA = i;
    const pointerB = sortedArray.length - 1 - i;

    let min = pointerA;
    let max = pointerB;

    for (let j = pointerA; j <= pointerB; j++) {
      if (sortedArray[j] < sortedArray[min]) {
        min = j;
      }
      if (sortedArray[j] > sortedArray[max]) {
        max = j;
      }
    }

    if (min != pointerA) {
      swap(sortedArray, pointerA, min);
    }
    if (min != max && max != pointerA && max != pointerB) {
      swap(sortedArray, pointerB, max);
    } else if (min != max && max == pointerA) {
      swap(sortedArray, pointerB, min);
    }
  }
  return sortedArray;
}

module.exports = doubleSelectionSort;
