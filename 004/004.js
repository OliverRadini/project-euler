const { factors } = require("../general/factors");

// will have between 5 and 6 digits
// try 6 first


function getThreeDigitFactors (x) {
    const fs = factors(x);

    for (let f = 0; f < fs.length; f++) {
        const a = fs[f];
        const b = x / a;

        if (a < 1000 && a > 99 && b < 1000 && b > 99) {
            return [a, b];
        }
    }
    return null;
}

let found = false;

// 6 digits:
outer: for (let i = 999; i > 99; i--) {
    const iReversed = [...String(i)].reverse().join("");
    const palindrome = `${i}${iReversed}`;

    const threeDigitFactors = getThreeDigitFactors(palindrome);

    if (threeDigitFactors !== null) {
        console.log(`Found a valid answer: ${palindrome} is the product of ${threeDigitFactors[0]} and ${threeDigitFactors[1]}`);
        found = true;
        break outer;
    }
}

if (!found) {
    // 5 digits:
    outer: for (let i = 99; i >= 10; i--) {
        for (let m = 10; m >= 0; m--) {
            const iReversed = [...String(i)].reverse().join("");
            const palindrome = Number(`${i}${m}${iReversed}`);
            const threeDigitFactors = getThreeDigitFactors(palindrome);

            if (factors !== null) {
                console.log(`Found a valid answer: ${palindrome} is the product of ${threeDigitFactors[0]} and ${threeDigitFactors[1]}`);
                break outer;
            }
        }
    }
}
