const encrypt = (str, shift, action) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  let result = '';
  if (shift > alphabet.length) {
    shift = shift % alphabet.length;
  }
  if (action === 'decode'){
    shift = shift * -1;
  }

  for (let i = 0; i < str.length; i++) {
    let ch = str[i].toLowerCase();
    if (alphabet.includes(ch)) {
      const newPosition = alphabet.indexOf(ch) + shift;
      if (str[i].toUpperCase() === str[i]) {

        result = result + alphabet.charAt(newPosition).toUpperCase();
      } else {
        result = result + alphabet.charAt(newPosition);
      }
    } else {
      result = result + str[i];
    }
  }
  return result;
};

module.exports = encrypt;
