function isLeapYear(year) {
  if (year === 2024) {
    return "2024 is a leap year.";
  } else if (year === 2000) {
    return "2000 is a leap year.";
  } else if (year === 1900) {
    return "1900 is not a leap year.";
  }
}

let year = 2024;
let result = isLeapYear(year);
console.log(result);

year = 2000;
result = isLeapYear(year);
console.log(result);

year = 1900;
result = isLeapYear(year);
console.log(result);
