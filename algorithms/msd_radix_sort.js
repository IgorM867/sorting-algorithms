function digit_at(x, d) {
  return Math.floor(x / Math.pow(10, d - 1)) % 10;
}

function sort(arr, lo, hi, d) {
  // recursion break condition
  if (hi <= lo) {
    return;
  }

  let count = new Array(10 + 2).fill(0);

  // temp is created to easily swap Strings in []arr
  let temp = [];

  // Store occurrences of most significant character
  // from each integer in []count
  for (let i = lo; i <= hi; i++) {
    let c = digit_at(arr[i], d);
    count[c]++;
  }

  // Change []count so that []count now contains actual
  // position of this digits in []temp
  for (let r = 0; r < 10 + 1; r++) count[r + 1] += count[r];

  // Build the temp
  for (let i = lo; i <= hi; i++) {
    let c = digit_at(arr[i], d);
    temp[count[c] - 1] = arr[i];
    count[c]--;
  }

  // Copy all integers of temp to []arr, so that []arr now
  // contains partially sorted integers
  for (let i = lo; i <= hi; i++) arr[i] = temp[i - lo];

  // Recursively MSD_sort() on each partially sorted
  // integers set to sort them by their next digit
  if (d == 1) return;
  for (let r = 0; r < 10; r++) sort(arr, lo + count[r], lo + count[r + 1] - 1, d - 1);
}

function getMax(arr, n) {
  let mx = arr[0];
  for (let i = 1; i < n; i++) if (arr[i] > mx) mx = arr[i];
  return mx;
}

function msdRadixSort(array) {
  const sortedArray = [...array];
  // Find the maximum number to know number of digits
  let n = sortedArray.length;
  let m = getMax(sortedArray, n);

  // get the length of the largest integer
  let d = Math.floor(Math.log10(Math.abs(m))) + 1;

  // function call
  sort(sortedArray, 0, n - 1, d);

  return sortedArray;
}
module.exports = msdRadixSort;
