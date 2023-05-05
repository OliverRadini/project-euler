/*
If the numbers 1 to 5 are written out in words: one, two, three, four,
five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.

If all the numbers from 1 to 1000 (one thousand) inclusive were written
out in words, how many letters would be used?
*/

const { numberToWord } = require("../general/numberToLetters");

let total = 0;
for (let i = 1; i < 1000; i++) {
    const asWord = numberToWord(i);
    console.log(asWord);

    total += numberToWord(i).length;
}

total += "one thousand".length;

console.log(total);