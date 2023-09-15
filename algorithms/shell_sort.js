function shellSort(array) {
  const sortedArray = [...array];

  let n = sortedArray.length;

  for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
    for (let i = gap; i < n; i += 1) {
      let temp = sortedArray[i];
      let j;
      for (j = i; j >= gap && sortedArray[j - gap] > temp; j -= gap)
        sortedArray[j] = sortedArray[j - gap];
      sortedArray[j] = temp;
    }
  }
  return sortedArray;
}
module.exports = shellSort;
