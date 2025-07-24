function frankenSplice(array1, array2, index) {
  let copy = array2.slice();
  copy.splice(index, 0, ...array1);
  return copy
}

console.log(frankenSplice([1, 2, 3], [4, 5], 1))
