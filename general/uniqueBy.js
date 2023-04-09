function uniqueBy (xs, f) {
    const values = [];
    const seen = new Set();

    for (let i = 0; i < xs.length; i++) {
        if (!seen.has(f(xs[i]))) {
            values.push(xs[i]);
            seen.add(f(xs[i]));
        }
    }

    return values;
}

module.exports = {
    uniqueBy
};