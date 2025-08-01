function findElement(array, test){
  for (let i = 0; i < array.length; i++){
    if (test(array[i])){
      return array[i];
    }
  }
}
