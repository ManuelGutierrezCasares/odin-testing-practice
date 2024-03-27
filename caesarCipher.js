export const caesarCipher = (string, shifter) => {
  if (!string || !shifter) {
    throw new Error('Missing arguments!');
  } else if (typeof string !== 'string' || typeof shifter !== 'number') {
    throw new Error('Wrong type of input!');
  }

  let shiftedString = '';

  while (shifter > 26) {
    shifter -= 26;
  }

  string.split('').forEach(e => {
    let ascii = e.charCodeAt(0);
    if (ascii <= 122 && ascii >= 97) {
      ascii -= 97;
      ascii += shifter;
      while (ascii > 25) {
        ascii -= 26;
      }
      shiftedString += String.fromCharCode(ascii + 97);
    } else if (ascii <= 90 && ascii >= 65) {
      ascii -= 65;
      ascii += shifter;
      while (ascii > 25) {
        ascii -= 26;
      }
      shiftedString += String.fromCharCode(ascii + 65);
    } else {
      shiftedString += e;
    }
  });

  return shiftedString;
};
