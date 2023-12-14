const readTextFile = require("../../readTextFile");

const input = readTextFile("2023/1/input.txt");

const replaceNumberWordsInString = (text) => {
  const replaceDigitInText = (text) => {
    const namedDigits = {
      one: 1,
      one: 1,
      two: 2,
      three: 3,
      four: 4,
      five: 5,
      six: 6,
      seven: 7,
      eight: 8,
      nine: 9,
    };
    const regexPattern = `(${Object.keys(namedDigits).join("|")})`;
    const regex = new RegExp(regexPattern, "g");
    return text.replace(
      regex,
      (match) =>
        `${namedDigits[match]}${match.charAt(match.length - 1)}` || match
    );
  };
  let transformed = replaceDigitInText(text);
  transformed = replaceDigitInText(transformed);
  return transformed;
};

const findCode = (text) => {
  const transformedText = replaceNumberWordsInString(text);
  if (!text) {
    return 0;
  }

  const numbers = transformedText?.match(/\d+/g)?.join("")?.split("");
  const code = parseInt(numbers[0] + numbers[numbers.length - 1]);
  return code;
};

const findSumOfCodes = (input) => {
  let sum = 0;
  let calibrationValues1 = [];
  for (let i = 0; i < input.length; i++) {
    const text = input[i];
    const code = findCode(text);
    calibrationValues1.push(code);
    sum += code;
  }
  console.log({ calibrationValues1 });
  return sum;
};

const solution = findSumOfCodes(input);
console.log("Solution 1: ", solution);
