function repeatStringNumTimes(string, number){
  let count = 0;
  let result = "";

  for (let i = 0; i < number; i ++){
    result += string;
  }
  return result;
}
