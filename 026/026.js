const { chunk } = require("../general/chunk");

const maxDenominator = BigInt(1000);

let numerator = BigInt(10);

for (let i = 0; i < 1000; i++) {
    numerator = numerator * BigInt(10);
}

function countPatternSize (n) {
    const s = String(n).replace(".", "");
}

const maxRepeatingPattern = 499;

for (let d = BigInt(2); d < maxDenominator; d++) {
    const decimal = String(numerator / d);

    for (let i = 2; i < maxRepeatingPattern; i++) {
        const theseChunks = chunk(i, decimal);

        const compareChunk = String(theseChunks[0]);

        const allEqual = theseChunks.reduce(
            (p, c) => p && String(c) === compareChunk,
            true,
        );

        if (allEqual) {
            console.log(`1/${d}`);
        }
    }

    // const max

    // for (let i = 0; i < )

    // for every length up to l / 2
    // compare the patterns of each size
    // see if the pattern is repeated throughout
}

