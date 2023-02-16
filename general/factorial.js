

function factorial(n) {
    let x = 1;
    for (let i = 2; i <= n; i++) {
        x = i * x;
    }

    return x;
}

module.exports = {
    factorial
};
