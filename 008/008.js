const { readFileSync } = require("fs");

const raw = readFileSync("./008/data", "utf8");

/**
As a dynamic programming problem:
    1. split the number into pairs:
    ie: 432112345 => [4, 3], [3, 2], [2, 1], [1, 1], [1, 2], [2, 3], [3, 4], [4, 5]

    2. multiply pairs (now sequences of 2)
    ie [12, 6, 2, 1, 2, 6, 12, 20]

    3. group skipping
    ie [12, 2], [6, 1], [2, 2], [1, 6], [2, 12], [6, 20]

    4. multiply pairs (now sequences of 4)
    ie [24, 6, 4, 6, 24, 120]

 */

function toPairs(x) {
    const result = [];
    for (let i = 0; i < x.length-1; i++) {
        result.push([x[i], x[i+1]]);
    }
    return result;
}

function findHighestProductOfSize(xs, n) {
    const maxFromPairs = (n - (n % 2)) / 2;

    let current = xs;
    for (let i = 0; i < maxFromPairs; i++) {
        const asPairs = toPairs(current);
        console.log(asPairs);
        const multiplied = asPairs.map(([a, b]) => a * b);
        current = multiplied;
    }

    return current;
}

const test = findHighestProductOfSize([4, 3, 2, 1, 1, 2, 3, 4, 5], 4);
console.log(test);
