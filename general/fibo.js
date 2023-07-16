
function* fibonacci () {
    let a = BigInt(1);
    let b = BigInt(1);

    let i = BigInt(-1);

    while (true) {
        i++;
        if (i === BigInt(0)) {
            yield BigInt(1);
            continue;
        }

        if (i === BigInt(1)) {
            yield BigInt(1);
            continue;
        }

        const thisOne = a + b;
        a = b;
        b = thisOne;

        yield thisOne;
    }
}

module.exports = fibonacci;