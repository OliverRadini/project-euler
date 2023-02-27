/**
A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a2 + b2 = c2
For example, 32 + 42 = 9 + 16 = 25 = 52.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.
 */

let result = null;

const aMax = 1000;

for (let a = 2; a < aMax; a++) {
    const diff = 1000 - a;

    for (let b = a; b < diff; b++) {
        const c = Math.sqrt((a * a) + (b * b));

        const total = a + b + c;
        if (total === 1000) {
            result = a * b * c;
            break;
        }
    }
}

console.log(result);