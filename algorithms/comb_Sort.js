const { swap } = require("../lib");

function combSort(array) {
  const arr = [...array];

  let gap = arr.length;
  let swapped;

  while (gap > 1 || swapped)
    for (let i = 0; i < arr.length - 1; i++) {
      gap = Math.floor(gap / 1.3);
      if (gap == 0) {
        gap = 1;
      }

      swapped = false;
      for (let i = 0; i + gap < arr.length; i++) {
        if (arr[i] > arr[i + gap]) {
          swap(arr, i, i + gap);
          swapped = true;
        }
      }
    }
  return arr;
}
module.exports = combSort;
