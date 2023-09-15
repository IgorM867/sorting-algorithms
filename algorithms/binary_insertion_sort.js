function binarySearch(array, item, low, high) {
  if (high <= low) {
    return item > array[low] ? low + 1 : low;
  }
  let mid = Math.floor((low + high) / 2);

  if (item === array[mid]) {
    return mid + 1;
  }

  if (item > array[mid]) {
    return binarySearch(array, item, mid + 1, high);
  } else {
    return binarySearch(array, item, low, mid - 1);
  }
}

function binaryInsertionSort(array) {
  const sortedArray = [...array];

  for (let i = 0; i < sortedArray.length; i++) {
    let current = sortedArray[i];
    let j = i - 1;

    const loc = binarySearch(sortedArray, current, 0, j);

    while (j >= loc) {
      sortedArray[j + 1] = sortedArray[j];
      j--;
    }
    sortedArray[j + 1] = current;
  }

  return sortedArray;
}
module.exports = binaryInsertionSort;
