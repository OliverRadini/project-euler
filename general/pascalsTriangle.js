

function pascalsTriangle (depth) {
    const rows = [];
    for (let row = 0; row < depth; row++) {
        const previousRow = rows[row-1] || [];
        const thisRow = [];

        for (let i = 0; i < row + 1; i++) {
            if (i === 0 || i === row) {
                thisRow.push(1);
            } else {
                thisRow.push(previousRow[i - 1] + previousRow[i]);
            }
        }

        rows.push(thisRow);
    }

    return rows;
}

module.exports = {
    pascalsTriangle
};
