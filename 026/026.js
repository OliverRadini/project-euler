const { primeFactors } = require("../general/prime-factors");

const MAX = 100;

// See  https://softwareengineering.stackexchange.com/questions/192070/what-is-a-efficient-way-to-find-repeating-decimal
// for explanation of number theory involved 
for (let i = 1; i <= MAX; i++) {
    const factors = primeFactors(i);

    if (!factors.every(x => x === 2 || x === 5)) {
        console.log(`${i} does recur`);
    }
}