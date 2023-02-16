
const numbers = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19];


for (let i = 1; i < Number.MAX_VALUE; i++) {
    const thisMultiple = i * 7;

    let isValid = true
    for (let j = numbers.length - 1; j >= 0; j--) {
        const thisNumber = numbers[j];

        if (thisMultiple % thisNumber !== 0) {
            isValid = false;
            break;
        }
    }

    if (isValid) {
        console.log(thisMultiple);
        break;
    }
}