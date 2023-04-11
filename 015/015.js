const { pascalsTriangle } = require("../general/pascalsTriangle");

const size = 20;
const rowsTest = pascalsTriangle((2 * size) - 1);

const lastRow = rowsTest[rowsTest.length - 1];

console.log(lastRow);

console.log(Math.max(...lastRow));
