function insertionSort(array) {
  const sortedArray = [...array];

  for (let i = 0; i < sortedArray.length; i++) {
    let current = sortedArray[i];
    let j = i - 1;
    while (j >= 0 && current < sortedArray[j]) {
      sortedArray[j + 1] = sortedArray[j];
      j--;
    }
    sortedArray[j + 1] = current;
  }

  return sortedArray;
}
module.exports = insertionSort;
