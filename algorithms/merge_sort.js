function merge(arr, left, mid, right) {
  const n1 = mid - left + 1;
  const n2 = right - mid;

  const L = new Array(n1);
  const R = new Array(n2);

  for (let i = 0; i < n1; i++) {
    L[i] = arr[left + i];
  }
  for (let j = 0; j < n2; j++) {
    R[j] = arr[mid + 1 + j];
  }

  let i = 0;
  let j = 0;
  let k = left;

  while (i < n1 && j < n2) {
    if (L[i] <= R[j]) {
      arr[k] = L[i];
      i++;
    } else {
      arr[k] = R[j];
      j++;
    }
    k++;
  }

  while (i < n1) {
    arr[k] = L[i];
    i++;
    k++;
  }
  while (j < n2) {
    arr[k] = R[j];
    j++;
    k++;
  }
}

function mergeSort(array, left = 0, right = array.length - 1, isRecursion = false) {
  const sortedArray = isRecursion ? array : [...array];

  if (left >= right) return;

  const mid = left + parseInt((right - left) / 2);
  mergeSort(sortedArray, left, mid, true);
  mergeSort(sortedArray, mid + 1, right, true);
  merge(sortedArray, left, mid, right);

  return sortedArray;
}
module.exports = mergeSort;
