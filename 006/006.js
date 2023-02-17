// Find the difference between the sum of the squares of the
// first one hundred natural numbers and the square of the sum.

const numbers = Array.from(Array(100)).map((x, i) => i + 1);

const sum = (a, b) => a + b;

const sumOfSquares = numbers.map(x => x * x).reduce(sum, 0);
const summed = numbers.reduce(sum, 0);
const squareOfSum = summed * summed;

console.log(squareOfSum - sumOfSquares);