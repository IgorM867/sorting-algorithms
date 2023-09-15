const {
  selectionSort,
  doubleSelectionSort,
  jsSort,
  insertionSort,
  binaryInsertionSort,
  bubbleSort,
  shakerSort,
  quickSort,
  mergeSort,
  heapSort,
  combSort,
  shellSort,
  radixSort,
  msdRadixSort,
} = require("./algorithms");
const { getArray, measureTime, testFunction, testAllFunctions } = require("./lib");

const results = {};
const array = getArray(100_000);

// measureTime(array, selectionSort, "selectionSort", results);
// measureTime(array, doubleSelectionSort, "doubleSelectionSort", results);
// measureTime(array, jsSort, "jsSort", results);
// measureTime(array, insertionSort, "insertionSort", results);
// measureTime(array, binaryInsertionSort, "binaryInsertionSort", results);
// measureTime(array, bubbleSort, "bubbleSort", results);
// measureTime(array, shakerSort, "shakerSort", results);
// measureTime(array, quickSort, "quickSort", results);
// measureTime(array, mergeSort, "mergeSort", results);
// measureTime(array, heapSort, "heapSort", results);
// measureTime(array, combSort, "combSort", results);
// measureTime(array, radixSort, "radixSort", results);
// measureTime(array, msdRadixSort, "msdRadixSort", results);
// console.table(results);

testAllFunctions("./algorithms");
