const fs = require("fs");
const { mergeSort } = require("../general/mergeSort");

const result = mergeSort((l, r) => l < r, [1, 5, 7, 9, 1, 3, 10, 12, 13]);

const names = fs
    .readFileSync("./022/0022_names.txt", "utf8")
    .replace(/"/g, "")
    .split(",");

const a = 1;