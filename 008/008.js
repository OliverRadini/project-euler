const { readFileSync } = require("fs");

const raw = readFileSync("./008/data", "utf8");

/**
 *
As a dynamic programming problem:
    1. What is the subproblem?
    Each number can be thought of as digit1 + digit2 + digit3

    2. How would we recurse this?
    We could have a list of known digit positions, then add to them
    the highest numbers
 */
function getHighestDigitOfSize(n, s, is, count=0) {
    if (is && (count === n || is.length === 1)) {
        return s.substring(is[0], is[0]+n);
    }

    const indices = is === undefined
        ? [...s.matchAll(/9/g, )].map(x => x.index)
        : is;

    const nexts = indices
        .map(i => ({ i, n: s[i+1+count] }));

    const biggestNext = nexts.sort((a, b) => Number(a.n) > Number(b.n) ? -1 : 1)[0].n;

    const onlyBiggestNexts = nexts
        .filter(({ n }) => n === biggestNext)
        .map(({ i }) => i);

    return getHighestDigitOfSize(n, s, onlyBiggestNexts, count + 1);
}

// TODO: this is not quite right; the highest product may still include
//       numbers which would have been missed by this
const result = getHighestDigitOfSize(13, raw);

console.log(result);