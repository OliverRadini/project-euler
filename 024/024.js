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
const targetLength = allNumbers.length;

function getUnusedNumbers(x) {
    const has = { "0": false, "1": false, "2": false, "3": false, "4": false, "5": false, "6": false, "7": false, "8": false, "9": false };

    for (let i = 0; i < x.length; i++) {
        delete has[x[i]];
    }

    return Object.keys(has);
}

function getAllCombinationsFrom(x) {

}

const test = getUnusedNumbers("123");

const a = 1;