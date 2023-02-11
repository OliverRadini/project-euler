const { factors } = require("./factors");

function primeFactors (n) {
    let found = [];
    
    const factorsOfN = factors(n).filter(x => x !== 1 && x !== n);

    const factorA = factorsOfN[0];
    const factorB = n / factorA;

    const aFactors = factors(factorA);

    if (aFactors.length <= 2) {
        found.push(factorA);
    } else {
        found.push(...primeFactors(factorA));
    }

    const bFactors = factors(factorB);

    if (bFactors.length <= 2) {
        found.push(factorB);
    } else {
        found.push(...primeFactors(factorB));
    }

    return found;
}

module.exports = {
    primeFactors
};