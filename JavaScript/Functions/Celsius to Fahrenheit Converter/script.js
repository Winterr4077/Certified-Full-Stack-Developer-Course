function convertCtoF(celsius){
  let fahrenheit = celsius * (9/5) +32;
  return fahrenheit;
}

console.log(convertCtoF(-30)) //convertCtoF(-30) should return a value of -22

console.log(convertCtoF(0)) //convertCtoF(0) should return a number

console.log(convertCtoF(30)) //convertCtoF(30) should return a value of 86
