const { factors } = require("../general/factors");

const results = {};

function populateValue (x) {
    const fs = factors(x);
    fs.pop();

    results[x] = fs.reduce((p, c) => p + c, 0);
}

let amicableNumbers = [];

for (let i = 0; i < 10000; i++) {
    if (results[i] === undefined) {
        populateValue(i);
    }

    const factorSum = results[i];
    if (factorSum === i) {
        continue;
    }

    if (results[factorSum] === undefined) {
        populateValue(factorSum);
    }

    if (results[factorSum] === i && results[i] === factorSum) {
        amicableNumbers.push(i);
        amicableNumbers.push(factorSum);
    }
}

const result = [...(new Set(amicableNumbers)).values()].reduce((p, c) => p + c, 0);
console.log(result);
