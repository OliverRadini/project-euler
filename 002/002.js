const fibonacci = require("../general/fibo");

let sum = 0;

for (let x of fibonacci()) {
    if (x > 4000000) {
        break;
    }

    if (x % 2 === 0) {
        sum += x;
    }
}

console.log(sum);