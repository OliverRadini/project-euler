const fs = require("fs");


const names = fs
    .readFileSync("./022/0022_names.txt", "utf8")
    .replace(/"/g, "")
    .split(",");

const a = 1;