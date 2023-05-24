const daysInMonths = [
    31,
    28,
    31,
    30,
    31,
    30,
    31,
    31,
    31,
    31,
    30,
    31,
];

function* days(startYear, startMonth=0, startDay=0) {
    let year = startYear;
    let month = startMonth;
    let day = startDay;

    while (true) {
        yield { day: day, month: month, year: year };

        const daysInMonth = daysInMonths[month];
        day++;

        if (day >= daysInMonth) {
            day = 0;
            
            if (month === daysInMonths.length - 1) {
                month = 0;
                year++;
            } else {
                month += 1;
            }
        }
    }
}

module.exports = days;