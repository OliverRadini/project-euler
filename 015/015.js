// note that the size of the path is fixed as n + 1

const size = 20;

const max = parseInt(Array.from(Array(size + 1)).map(() => "1").join(""), 2);

const foundPaths = [];
let count = 0;
for (let i = 0; i < max; i++) {
    const inBase2 = (i >>> 0).toString(2).padStart(size + 1, "0");

    if (inBase2.length !== size + 1) {
        continue;
    }

    let zeroes = 0;
    let ones = 0;

    for (let j = 0; j < inBase2.length; j++) {
        if (inBase2[j] === "0") {
            zeroes++;
        } else {
            ones++
        }
    }

    if (ones === zeroes) {
        count++;
        foundPaths.push(inBase2);
    }
}

console.log(foundPaths);
console.log(count);