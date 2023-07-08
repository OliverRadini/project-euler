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

const allNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// const allNumbers = ["0", "1", "2"];
const targetLength = allNumbers.length;

const defaultHas = allNumbers.reduce((p, c) => ({ ...p, [c]: false}), {});

function getUnusedNumbers(x) {
    const has = { ...defaultHas };

    for (let i = 0; i < x.length; i++) {
        delete has[x[i]];
    }

    return Object.keys(has);
}

function getAllCombinationsFrom(n) {
    const unusedNumbers = getUnusedNumbers(n);

    if (unusedNumbers.length === 0) {
        return [n];
    }

    const withOneExtraNumber = unusedNumbers
        .flatMap(x => getAllCombinationsFrom(`${n}${x}`));

    return withOneExtraNumber;
}

const combinations = getAllCombinationsFrom("");

console.log("Generating combinations done");

const sorted = combinations.sort();

const answer = sorted[999999];

const a = 1;