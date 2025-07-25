function pyramid(character, rows, boolean) {
  let placeholder = '';

  if (boolean === false) {
    for (let i = 0; i < rows; i++) {
      let spaceCount = rows - i - 1;
      let charCount = 2 * i + 1;

      let spaces = ' '.repeat(spaceCount);
      let characters = character.repeat(charCount);
      let fullLine = spaces + characters + '\n';

      placeholder += fullLine;
    }
  } else if (boolean === true) {
    for (let i = 0; i < rows; i++) {
      let spaceCount = i;
      let charCount = (2 * (rows-i)) -1;
      let spaces = ' '.repeat(spaceCount);
      let characters = character.repeat(charCount);
      let fullLine = spaces + characters + '\n';

      placeholder += fullLine;
    }
  }

  placeholder = '\n' + placeholder;
  return placeholder;
}

console.log(pyramid("o", 4, false));
