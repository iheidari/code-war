// https://www.codewars.com/kata/5917fbed9f4056205a00001e/train/javascript
const getWords = (word, input) => {
  const length = input.length;
  const toRet = [];
  let currentWord = "";

  for (let i = 0; i < length; i++) {
    if (input[i] === word[0]) {
      if (word.length > 1 && i + 1 != length) {
        const subWords = getWords(word.slice(1), input.slice(i + 1));
        subWords.forEach((sw) => toRet.push(currentWord + word[0] + sw));
      } else {
        if (word.length === 1) {
          toRet.push(currentWord + input[i] + "-".repeat(length - 1 - i));
        }
      }
    }
    currentWord += "-";
  }
  return toRet;
};

const bananas = (input) => {
  // Your code here!
  return getWords("banana", input);
};

const result = bananas("bbananana");
console.log("🚀 ~ file: bananas.js ~ line 21 ~ result", result);
