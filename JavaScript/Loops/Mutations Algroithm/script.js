function mutation(array) {
  return array[1]
    .toLowerCase()
    .split('')
    .every(char => array[0].toLowerCase().includes(char));
}

console.log(mutation(["floor", "for"]));
console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));   
console.log(mutation(["voodoo", "no"]));  


/* 
true 
true 
false
*/
