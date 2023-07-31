const { primeFactors } = require("../general/prime-factors");

const MAX = 100;

/**
 * 
 * Any nonregular fraction m/n is periodic, and has a period
 * lambda(n) independent of m, which is at most n-1 digits
 * long. If n is relatively prime to 10, then the period
 * lambda(n) of m/n is a divisor of phi(n) and has at most
 * phi(n) digits, where phi is the totient function. It
 * turns out that lambda(n) is the multiplicative order
 * of 10 (mod n) (Glaisher 1878, Lehmer 1941). The number
 * of digits in the repeating portion of the decimal expansion
 * of a rational number can also be found directly from
 * the multiplicative order of its denominator.
 * 
 */

/**
 the multiplicative order of a modulo n is the
 smallest positive integer k such that 
 a ^ k mod n = 1 (mod n)
 */
function multiplicativeOrder (a, n) {
    const ALLOWED_MAX = 1000;
    let k = 1;
    while (k < ALLOWED_MAX) {
        const result = Math.pow(a, k) % n;

        if (result === 1) {
            return k;
        }
        k++;
    }

    return -1;
}

let denominatorWithMaxPattern = -1;
let currentMax = 0;

// See  https://softwareengineering.stackexchange.com/questions/192070/what-is-a-efficient-way-to-find-repeating-decimal
// for explanation of number theory involved 
for (let i = 1; i <= MAX; i++) {
    const thisPatternLength = multiplicativeOrder(10, i);

    if (thisPatternLength > currentMax) {
        console.log(`${i} has pattern length of ${thisPatternLength}`);
        currentMax = thisPatternLength;
        denominatorWithMaxPattern = i;
    }
}

console.log(denominatorWithMaxPattern);