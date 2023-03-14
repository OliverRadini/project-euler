const { readFileSync } = require("fs");

const sumOfLines = readFileSync("./013/data", "utf8")
    .split("\n")
    .map(BigInt)
    .reduce(
        (p, c) => p + c,
        BigInt(0)
    );

const test = `${sumOfLines}`.substring(0, 10);

console.log(test);