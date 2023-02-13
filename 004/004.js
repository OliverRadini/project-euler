const { factors } = require("../general/factors");

// will have between 5 and 6 digits
// try 6 first

for (let i = 10; i <= 99; i++) {
    for (let m = 0; m < 10; m++) {
        const iReversed = [...String(i)].reverse().join("");
        const test = `${i}${m}${iReversed}`;
        const x = Number(test);

    }
}