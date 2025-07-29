function confirmEnding(string, ending){
  let slice = string.slice(string.length - ending.length);

  if (slice === ending){
    return true;
  } else {
    return false;
  }
}

console.log(confirmEnding("Bastian", "n"))
