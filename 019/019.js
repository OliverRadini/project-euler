/**
You are given the following information, but you may prefer to do some research for yourself.

1 Jan 1900 was a Monday.
Thirty days has September,
April, June and November.
All the rest have thirty-one,
Saving February alone,
Which has twenty-eight, rain or shine.
And on leap years, twenty-nine.
A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.

How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?
*/
const days = require("../general/days");

const maxYear = 2001;

let currentDay = { year: 1900, month: 0, day: 0 };
const getNextDay = days(currentDay.year, currentDay.month, currentDay.day);

let dayOfTheWeek = 0;

let currentYear = currentDay.year;

let count = 0;

while (currentYear <= maxYear) {
    currentYear = currentDay.year;
    // console.log(dayOfTheWeek);
    // console.log(currentDay);

    dayOfTheWeek = (dayOfTheWeek + 1) % 7;

    if (dayOfTheWeek === 6 && currentDay.day === 0) {
        count++;
    }

    currentDay = getNextDay.next().value;
}

console.log(count);
