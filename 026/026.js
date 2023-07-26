const { chunk } = require("../general/chunk");

const maxRepeatingPattern = 499;

for (let d = 2; d < 1000; d++) {
    const decimal = String(1 / d).replace("0.", "");

    const allSameDigit = [...decimal].every(x => x === decimal[0]);

    if (allSameDigit) {
        continue;
    }

    for (let i = 2; i < maxRepeatingPattern; i++) {
        const theseChunks = chunk(i, decimal);

        if (d === 17 && i >= 10) {
            const a = 1;
        }

        if (theseChunks.length <= 1) {
            continue;
        }

        const compareChunk = String(theseChunks[0]);

        const allEqual = theseChunks.reduce(
            (p, c) => {
                if (!p) {
                    return false;
                }

                for (let ci = 0; ci < c.length; ci++) {
                    if (c[ci] !== compareChunk[ci]) {
                        return false
                    }
                }

                return true;
            },
            true,
        );

        if (allEqual) {
            console.log(`1/${d} has a repeating pattern of ${compareChunk}`);
        }
    }
}

