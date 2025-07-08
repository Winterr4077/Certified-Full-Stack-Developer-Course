function maskEmail(email) {
  return email.replace(/^(.)(.*)(.@.*)$/, (match, first, middle, rest) => {
    return first + '*'.repeat(middle.length) + rest;
  });
}

let email = "apple.pie@example.com";

console.log(maskEmail(email));

email = "freecodecamp@example.com";

console.log(maskEmail(email));

email = "info@test.dev";

console.log(maskEmail(email));

email = "user@domain.org";

console.log(maskEmail(email));
