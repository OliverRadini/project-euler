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

        day++;
        const isLeap =  ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);

        const daysInMonth = isLeap && month === 1 ? 29 : daysInMonths[month];

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