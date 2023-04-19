function caesarCipher(string, k) {
  return string.split('')
    .map((char) => {
      if ((/[a-zA-Z]/).test(char)) {
        // normalize between 0 and 25
        const aOfCase = char === char.toLowerCase() ? 'a' : 'A';
        const normalizedLetter = char.charCodeAt(0) - aOfCase.charCodeAt(0);
        // normalize k to be positive
        const kPositive = 26 + (k % 26);
        const shiftedCharCode = ((normalizedLetter + kPositive) % 26) + aOfCase.charCodeAt(0);
        return String.fromCharCode(shiftedCharCode);
      }
      return char;
    })
    .join('');
}

export default caesarCipher;
