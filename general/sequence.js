
function* sequence (start, f, terminate) {
    let x = start;

    while (true) {
        if (terminate(x)) {
            return;
        }

        yield x;
        x = f(x);
    }
}

module.exports = { sequence };