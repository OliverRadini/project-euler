// note that the size of the path is fixed as n + 1

const size = 20;
const sizeOfRoute = (size - 1) * 2;

const min = parseInt(
    Array.from(Array(sizeOfRoute / 2)).map(() => "0").join("") + Array.from(Array(sizeOfRoute / 2)).map(() => "1").join(""),
    2
);
const max = parseInt(Array.from(Array(sizeOfRoute)).map(() => "1").join(""), 2);

if (max > Number.MAX_SAFE_INTEGER) {
    throw new Error("Grid is too large to process");
}

console.log(`min is ${min}, max is ${max}`);

const foundPaths = [];
let count = 0;
for (let i = min; i < max; i++) {
    if (i % 10000 === 0) {
        const percent = (i / max) * 100;
        console.log(`${percent}%`);
    }
    let oneCount = 0;
    const n = Math.floor(Math.log2(i));
    for (let j = 0; j < n; j++) {
        oneCount += (i & (1<<j))
    }

    if (oneCount === (size - 1)) {
        count++;
    }
}

console.log(count);