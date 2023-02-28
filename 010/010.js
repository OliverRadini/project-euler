const { primes } = require("../general/primes");
const { sum } = require("../general/sum");

/*
The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below two million.
*/
const result = [...primes(2000000)].reduce(sum, 0) - 1;
console.log(result);


