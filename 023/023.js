/**
A perfect number is a number for which the sum of its proper divisors is
exactly equal to the number. For example, the sum of the proper divisors of 
would be, which means that is a perfect number.

A number is called deficient if the sum of its proper divisors is less
than and it is called abundant if this sum exceeds 

12 is the smallest abundant number.

By mathematical analysis, it can be shown that all integers greater than 28123
can be written as the sum of two abundant numbers

Find the sum of all the positive integers which cannot be written as the
sum of two abundant numbers.
*/

const { factors } = require("../general/factors");

function isAbundant(n) {
    const fs = factors(n);
    fs.pop();
    const sumOfFactors = fs.reduce((p, c) => p + c, 0);

    return sumOfFactors > n;
}

const maximum = 28123;

const abundantNumbers = [];

const matches = [];

for (let i = 0; i < maximum; i++) {
    matches.push(i);

    if (isAbundant(i)) {
        abundantNumbers.push(i);
    }

    let l = 0;
    let r = abundantNumbers.length - 1;

    while (l < r) {
        if (2 * abundantNumbers[l] === i || 2 * abundantNumbers[r] === i) {
            matches.pop();
            break;
        }

        const sum = abundantNumbers[l] + abundantNumbers[r];
        if (sum === i) {
            matches.pop();
            break;
        }

        if (sum > i) {
            r--;
        } else {
            l++;
        }
    }
}

const result = matches.reduce((p, c) => p + c, 0);
console.log(result);