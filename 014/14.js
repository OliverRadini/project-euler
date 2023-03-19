/**
The following iterative sequence is defined for the set of positive integers:

n → n/2 (n is even)
n → 3n + 1 (n is odd)

Using the rule above and starting with 13, we generate the following sequence:

13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

Which starting number, under one million, produces the longest chain?

NOTE: Once the chain starts the terms are allowed to go above one million.
*/
const results = { 1: 1 };
let max = -1;

function nextCollatz (n) {
    if (n % 2 === 0) {
        return n / 2;
    }

    return (3 * n) + 1;
}


for (let i = 2; i < 1000000; i++) {
    let x = i;
    let chain = [];

    while (true) {
        chain.push(x);

        if (results[x] !== undefined) {
            const thisChainLength = chain.length + results[x] - 1;
            results[i] = thisChainLength;

            if (thisChainLength > max) {
                max = thisChainLength;
            }
            break;
        }

        x = nextCollatz(x);
    }
}

const abc = results[13];
const test = 1;