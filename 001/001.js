
let total = 0;
for (let i = 0; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        console.log(i);
        total += i;
    }
}

console.log(total);
