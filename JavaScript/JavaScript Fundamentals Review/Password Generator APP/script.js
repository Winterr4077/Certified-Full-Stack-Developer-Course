function generatePassword(length){
  let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  let password = "";

  for (let i = 0; i < length; i++){
    let index = Math.floor(Math.random() * characters.length);
    password = password + characters[index];
  }
  return password;
}

let password = generatePassword(8);
console.log("Generated password: " + password)
