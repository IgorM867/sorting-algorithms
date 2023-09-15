function getArray(n) {
  return new Array(n).fill(0).map(() => Math.floor(Math.random() * n * 10));
}
function isSorted(array) {
  let isSorted = true;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[i + 1]) {
      isSorted = false;
    }
  }
  return isSorted;
}
function testFunction(sortingFunction) {
  let allGood = true;
  const errors = [];
  for (let i = 0; i < 64; i++) {
    const n = Math.floor(Math.random() * 10000) + 400; //10000  + 400
    const array = getArray(n);
    const sortedArray = sortingFunction(array);

    if (!Array.isArray(sortedArray)) {
      if (!errors.find((error) => error == "Function do not return an array")) {
        errors.push("Function do not return an array");
      }
      allGood = false;
    } else {
      if (!isSorted(sortedArray)) {
        if (!errors.find((error) => error == "New Array is not sorted")) {
          errors.push("New Array is not sorted");
        }
        console.log(array);
        console.log(sortedArray);
        allGood = false;
      }
      if (isSorted(array)) {
        if (!errors.find((error) => error == "Function mutate the passed array")) {
          errors.push("Function mutate the passed array");
        }
        allGood = false;
      }
    }
  }
  return { status: allGood, errors };
}
function measureTime(array, sortingFunction, name, results) {
  let start = performance.now();
  sortingFunction(array);
  let end = performance.now();

  results[name] = `${Math.round((end - start + Number.EPSILON) * 100) / 100}ms`;
}
function swap(arr, i1, i2) {
  const temp = arr[i1];
  arr[i1] = arr[i2];
  arr[i2] = temp;
}

function testAllFunctions(path) {
  const functions = require(path);
  const results = {};

  for (const fun in functions) {
    const result = testFunction(functions[fun]);
    results[fun] = result;
  }
  for (const result in results) {
    results[result].errors = results[result].status ? "None" : results[result].errors[0];
    results[result].status = results[result].status ? "Test Passed" : "Test Failed";
  }
  console.table(results);
}
module.exports = {
  getArray,
  isSorted,
  testFunction,
  measureTime,
  swap,
  testAllFunctions,
};
