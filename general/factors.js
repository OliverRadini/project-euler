
function factors (n, factorCache = {}) {
    const factors = factorCache;

    let i = 0;
    while (i*i < n) {
        i++;
        if (factors[i] !== undefined) {
            continue;
        }

        if (n % i === 0) {
            factors[i] = true;
            factors[n / i] = true;
        }
    }

    return Object.keys(factors);
}

module.exports = {
    factors
};