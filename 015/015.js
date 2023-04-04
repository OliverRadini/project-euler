// note that the size of the path is fixed as n + 1

const size = 20;
const sizeOfRoute = (size - 1) * 2;

const min = parseInt(
    Array.from(Array(sizeOfRoute / 2)).map(() => "0").join("") + Array.from(Array(sizeOfRoute / 2)).map(() => "1").join(""),
    2
);
const max = parseInt(Array.from(Array(sizeOfRoute)).map(() => "1").join(""), 2);

console.log(`min is ${min}, max is ${max}`);

const foundPaths = [];
let count = 0;
for (let i = min; i < max; i++) {
    const inBase2 = (i >>> 0).toString(2).padStart(sizeOfRoute, "0");

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
    }
}

console.log(count);