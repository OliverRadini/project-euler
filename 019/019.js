const days = require("../general/days");

let year = 1901;

const getNextDay = days(year);
while (year < 2002) {
    const nextDay = getNextDay.next();

    year = nextDay.value.year;

    console.log(nextDay.value);
}

