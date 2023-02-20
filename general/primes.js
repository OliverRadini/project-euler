

function primes (max) {
    // go through all factors of a number; 2*1, 2*2, 2*3
    // can then start at the next number up, ie, for 3, we don't need to start
    // at 2, as we already have that
    const primes = new Set(Array.from(Array(max)).map((_, i) => i));

    for (let i = 2; i < max; i++) {
        for (let j = i; j < max; j++) {
            const result = i * j;
            if (result > max) {
                break;
            }
            primes.delete(i * j);
        }
    }

    return primes;
}

module.exports = {
    primes
};
