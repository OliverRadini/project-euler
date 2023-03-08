const { readFileSync } = require("fs");
const { rotate2dArray } = require("../general/rotate2dArray");
// What is the greatest product of four adjacent
// numbers in the same direction (up, down, left,
// right, or diagonally) in the 20×20 grid?

// just do brute force first

let rows = readFileSync("./011/data", "utf8")
    .split("\n")
    .map(x => x.split("\n").map(x => x.split(" ").map(Number))).flat();

let foundMax = -1;

function scanRowsForMax () {
    for (let i = 0; i < rows.length; i++) {
        const thisRow = rows[i];

        for (let j = 0; j < thisRow.length - 3; j++) {
            const thisValue = thisRow[j] * thisRow[j + 1] * thisRow[j + 2] * thisRow[j + 3];

            if (thisValue > foundMax) {
                foundMax = thisValue;
            }
        }
    }
}

// horizontal
scanRowsForMax();

console.log(foundMax);
rows = rotate2dArray(rows);

scanRowsForMax();

console.log(foundMax);