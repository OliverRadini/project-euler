
function rotate2dArray (array) {
    const output = Array.from(Array(array[0].length)).map(() => []);
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[0].length; j++) {
            output[j][i] = array[i][j];
        }
    }

    return output;
}

module.exports = { rotate2dArray };