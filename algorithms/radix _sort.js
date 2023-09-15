function countSort(arr, n, exp) {
  let output = new Array(n);
  let i;
  let count = new Array(10).fill(0);

  for (i = 0; i < n; i++) {
    let x = Math.floor(arr[i] / exp) % 10;
    count[x]++;
  }
  for (i = 1; i < 10; i++) {
    count[i] += count[i - 1];
  }
  for (i = n - 1; i >= 0; i--) {
    const x = Math.floor(arr[i] / exp) % 10;
    output[count[x] - 1] = arr[i];
    count[x]--;
  }
  for (i = 0; i < n; i++) arr[i] = output[i];
}

function radixSort(array) {
  const sortedArray = [...array];

  let max = sortedArray[0];
  for (let i = 1; i < sortedArray.length; i++) {
    if (sortedArray[i] > max) max = sortedArray[i];
  }
  let n = sortedArray.length;

  for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
    countSort(sortedArray, n, exp);
  }

  return sortedArray;
}
module.exports = radixSort;
