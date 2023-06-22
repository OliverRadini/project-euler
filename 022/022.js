const fs = require("fs");
const { mergeSort } = require("../general/mergeSort");


function scoreName (name) {
    const lowerName = name.toLowerCase();
    let score = 0;

    for (let i = 0; i < lowerName.length; i++) {
        const letterScore = (lowerName.charCodeAt(i) - 97) + 1;
        
        score += letterScore;
    }

    return score;
}

const names = fs
    .readFileSync("./022/0022_names.txt", "utf8")
    .replace(/"/g, "")
    .split(",");

const sorted = mergeSort((a, b) => a.localeCompare(b) === -1, names)

const scores = sorted
    .map((x, i) => ({
        nameScore: scoreName(x),
        score: scoreName(x) * (i+1), name: x
    }));

const total = scores.reduce((p, c) => p + c.score, 0);

console.log(total);

const a = 1;