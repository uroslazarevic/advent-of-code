const fs = require("fs");

function readTextFile(filePath) {
  const text = fs.readFileSync(filePath);
  const textByLine = text.toString().split("\n");
  return textByLine;
}

module.exports = readTextFile;
