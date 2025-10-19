function fearNotLetter(letter){
  for (let i = 0; i < letter.length - 1; i++) {
    let first = letter[i].charCodeAt();
    let next = letter[i + 1].charCodeAt();

    if (next - first > 1){
      first++;
      first = String.fromCharCode(first)
      return first;
    }
}
return undefined
}
