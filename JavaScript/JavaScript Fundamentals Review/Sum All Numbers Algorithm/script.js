function sumAll(arr){
  let min = Math.min(arr[0], arr[1]);
  let max = Math.max(arr[0], arr[1]);
  let sum = 0;

  for (let i = min; i <= max; i++) {
    sum = sum + i;
  }
  return sum;
}

console.log(sumAll([10, 5]))
