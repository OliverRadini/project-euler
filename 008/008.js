const { readFileSync } = require("fs");

const raw = readFileSync("./008/data", "utf8");

// the highest product of size n is built up of the highest product
function findHighestProductOfSize(xs, n) {
    let max = 0;
    let maxSub = "";
    for (let i = xs.length; i > n; i--) {
        const sub = xs.slice(i - n, i);
        const value = sub.reduce((p, c) => p * c, 1);

        if (value > max) {
            max = value;
            maxSub = sub.join("");
        }
    }

    return max;
}

const test = findHighestProductOfSize(raw.split(""), 13);
console.log(test);
