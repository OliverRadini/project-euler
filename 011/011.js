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

// horizontal
for (let i = 0; i < rows.length; i++) {
    const thisRow = rows[i];

    for (let j = 0; j < thisRow.length - 3; j++) {
        const thisValue = thisRow[j] * thisRow[j + 1] * thisRow[j + 2] * thisRow[j + 3];

        if (thisValue > foundMax) {
            foundMax = thisValue;
        }
    }
}

//diagonal right
for (let i = 0; i < rows.length - 3; i++) {
    for (let j = 0; j < rows[0].length - 3; j++) {
        const result = rows[i][j] * rows[i+1][j+1] * rows[i+2][j+2] * rows[i+3][j+3];

        console.log(`${rows[i][j]} * ${rows[i+1][j+1]} * ${rows[i+2][j+2]} * ${rows[i+3][j+3]}`);
        if (result > foundMax) {
            foundMax = result;
        }
    }
}

//diagonal left
for (let i = 0; i < rows.length - 3; i++) {
    for (let j = 3; j < rows[0].length; j++) {
        const result = rows[i][j] * rows[i+1][j-1] * rows[i+2][j-2] * rows[i+3][j-3];

        console.log(`${rows[i][j]} * ${rows[i+1][j-1]} * ${rows[i+2][j-2]} * ${rows[i+3][j-3]}`);
        if (result > foundMax) {
            foundMax = result;
        }
    }
}


console.log(foundMax);
