const { swap } = require("../lib");

function heapify(arr, n, i) {
  let largest = i;
  const left = 2 * i + 1;
  const right = 2 * i + 2;

  if (left < n && arr[left] > arr[largest]) {
    largest = left;
  }

  if (right < n && arr[right] > arr[largest]) {
    largest = right;
  }

  if (largest != i) {
    swap(arr, i, largest);

    heapify(arr, n, largest);
  }
}

function heapSort(array) {
  const sortedArray = [...array];

  const n = sortedArray.length;

  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(sortedArray, n, i);
  }

  for (let i = n - 1; i > 0; i--) {
    swap(sortedArray, 0, i);
    heapify(sortedArray, i, 0);
  }

  return sortedArray;
}
module.exports = heapSort;
