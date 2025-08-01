function findLongestWordLength(string){
  let words = string.split(" ");
  let length = 0;

  for (let i = 0; i < words.length; i++){
    if (words[i].length > length){
      length = words[i].length
    }
  }
  return length;
}


console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"))
