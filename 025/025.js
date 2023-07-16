const fibonacci = require("../general/fibo");

let target = BigInt(10);

for (let i = 0; i < 998; i++) {
    target = target * BigInt(10);
}

let i = 0;
for (let x of fibonacci()) {
    if (x > target) {
        console.log(i+1);
        break;
    }
    i++;
}
