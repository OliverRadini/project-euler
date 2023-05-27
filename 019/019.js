const days = require("../general/days");

const maxYear = 2001;

let currentDay = { year: 1900, month: 0, day: 0 };
const getNextDay = days(currentDay.year, currentDay.month, currentDay.day);

let dayOfTheWeek = 0;

let currentYear = currentDay.year;

while (currentYear <= maxYear) {
    currentYear = currentDay.year;
    console.log(dayOfTheWeek);
    console.log(currentDay);

    dayOfTheWeek = (dayOfTheWeek + 1) % 7;
    currentDay = getNextDay.next().value;
}
