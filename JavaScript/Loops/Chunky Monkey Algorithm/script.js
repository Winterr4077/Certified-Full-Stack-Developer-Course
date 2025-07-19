function chunkArrayInGroups(array, number){
  let outcome = [];
  for (let i = 0; i < array.length; i += number){
    outcome.push(array.slice(i, i+number));
  }
  return outcome;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
