/*
A permutation is an ordered arrangement of objects. For example,
3124 is one possible permutation of the digits 1, 2, 3 and 4.
If all of the permutations are listed numerically or alphabetically,
we call it lexicographic order. The lexicographic permutations of
0, 1 and 2 are:

012   021   102   120   201   210

What is the millionth lexicographic permutation of
the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9?
*/


function hasEveryDigit(n) {
    const digits = {
        0: false,
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
        8: false,
        9: false,
    };

    for (let i = 0; i < n.length; i++) {
        digits[n[i]] = true;
    }

    return Object.values(digits).every(x => x === true);
}

const TARGET_COUNT = 1000000;
let count = 0;
let i = BigInt(123456789);

while (count < TARGET_COUNT) {
    let thisInstance = `${i}`.padStart(10, "0");

    if (thisInstance.length > 10) {
        break;
    }

    if (hasEveryDigit(thisInstance)) {
        count++;
        console.log(100*(count/TARGET_COUNT));
    }

    i++;
}

console.log(`Instance ${count} is ${i}`);