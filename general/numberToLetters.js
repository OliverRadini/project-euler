
function toFullWord(parts) {
    return parts 
        .filter(x => x !== null)
        .join(" ");
}

/**
 * Converts a number to a 'word' equivalent
 * 
 * NOTE: Max is 1000
 * 
 * @param {number} n the number to convert
 * @returns {array} the word representation of the number split out into parts
 */
function numberToWordParts (n) {
    if (Number.isNaN(n)) {
        throw new Error(`Cannot convert ${n} to word parts`);
    }

    const number = Math.min(1000, n);

    const onesLookup = {
        0: null,
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen"
    };

    if (number < 20) {
        return [onesLookup[number]];
    }

    if (number < 100) {
        const tensPart = Math.floor(number / 10);
        const remainder = number - (tensPart * 10);

        const tensLookup = {
            0: null,
            1: "ten",
            2: "twenty",
            3: "thirty",
            4: "forty",
            5: "fifty",
            6: "sixty",
            7: "seventy",
            8: "eighty",
            9: "ninety"
        }

        return [tensLookup[tensPart], ...numberToWordParts(remainder)]
    }

    const hundreds = Math.floor(number / 100);
    const remainder = number - (hundreds * 100);

    return [
        `${onesLookup[hundreds]} hundred`,
        ...numberToWordParts(remainder)
    ];
}

function numberToWord (n) {
    const parts = numberToWordParts(n);

    if (n > 99 && parts.filter(x => x !== null).length > 1) {
        parts.splice(1, 0, "and");
    }
    return toFullWord(parts);
}

module.exports = {
    numberToWord
};