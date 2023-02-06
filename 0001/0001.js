const { sequence } = require("../general/sequence");
const { add } = require("../general/add");

let totalOfThrees = 0;
let totalOfFives = 0;

for (let x of sequence(1, add(3), x => x > 1000)) {
    totalOfThrees += x;
}


for (let x of sequence(1, add(5), x => x > 1000)) {
    totalOfFives += x;
}

console.log(totalOfThrees + totalOfFives);
