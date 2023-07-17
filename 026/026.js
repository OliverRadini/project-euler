
const maxDenominator = BigInt(1000);

let numerator = BigInt(10);

for (let i = 0; i < 1000; i++) {
    numerator = numerator * BigInt(10);
}

function countPatternSize (n) {
    const s = String(n).replace(".", "");
}

for (let d = BigInt(2); d < maxDenominator; d++) {
    const decimal = numerator / d;
    console.log(decimal);
}