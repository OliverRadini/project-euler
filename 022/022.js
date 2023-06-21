const fs = require("fs");
const { mergeSort } = require("../general/mergeSort");


function scoreName (name) {
    const lowerName = name.toLowerCase();
    let score = 0;

    for (let i = 0; i < lowerName.length; i++) {
        score += (lowerName.charCodeAt(i) - 97) + 1;
    }

    return score;
}

const names = fs
    .readFileSync("./022/0022_names.txt", "utf8")
    .replace(/"/g, "")
    .split(",");

const sorted = mergeSort((a, b) => a.localeCompare(b) === -1, names)

const scores = sorted
    .map((x, i) => ({ nameScore: scoreName(x), score: scoreName(x) * (i+1), name: x }))

const test = scoreName("COLIN");

const a = 1;