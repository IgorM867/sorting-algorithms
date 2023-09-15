function jsSort(array) {
  const sortedArray = [...array];
  sortedArray.sort((a, b) => a - b);

  return sortedArray;
}
module.exports = jsSort;
