/*
2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

What is the sum of the digits of the number 2^1000?
*/

const power = 1000;

const x = BigInt(Math.pow(2, power));

const result = [...`${x}`]
    .reduce(
        (p, c) => p + Number(c),
        0
    );

console.log(result);