const { readFileSync } = require("fs");

const fileName = process.argv[2] === "2" ? "data2" : "data";

const data = readFileSync(`./018/${fileName}`, "utf8")
    .split("\n").map(x => x.split(" ").map(Number));

function getTriangleFromPosition (row, index) {
    return [
        data[row-1][index-1],
        data[row][index-1],
        data[row][index],
    ];
}

function triangleToValue (top, left, right) {
    return left > right ? top + left : top + right;
}

for (let rowIndex = data.length-1; rowIndex > 0; rowIndex--) {
    const thisRow = data[rowIndex];

    for (let position = 1; position < thisRow.length; position++) {
        const thisTriangle = getTriangleFromPosition(rowIndex, position);
    
        const thisValue = triangleToValue(...thisTriangle);

        data[rowIndex-1][position-1] = thisValue;
    }
}

console.log(data[0][0]);