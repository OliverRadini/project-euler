
function* fibonacci () {
    let a = 1;
    let b = 1;

    let i = -1;

    while (true) {
        i++;
        if (i === 0) {
            yield 1;
            continue;
        }

        if (i === 1) {
            yield 1;
            continue;
        }

        const thisOne = a + b;
        a = b;
        b = thisOne;

        yield thisOne;
    }
}

module.exports = fibonacci;