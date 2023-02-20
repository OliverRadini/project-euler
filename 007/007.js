// What is the 10001st prime number?

const { primes } = require("../general/primes");

const allPrimes = [...primes(1000000)].sort((a, b) => a > b ? 1 : -1);

console.log(allPrimes[10002])
