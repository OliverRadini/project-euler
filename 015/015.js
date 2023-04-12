const size = 21;

const grid = [];

for (let i = 0; i < size; i++) {
    grid.push([]);

    for (let j = 0; j < size; j++) {
        grid[i].push(0);
    }
}

grid[size - 1][size - 1] = 1;

function getNextCoords (x, y) {
    const points = [];
    if (x < size - 1) {
        points.push([x + 1, y]);
    }

    if (y < size - 1) {
        points.push([x, y + 1]);
    }

    return points;
}

function walkGrid() {
    for (let y = 0; y < size; y++) {
        for (let x = 0; x < size; x++) {
            if (grid[y][x] !== 0) {
                continue;
            }

            const nextPoints = getNextCoords(x, y);

            let pointTotal = 0;
            for (let point of nextPoints) {
                pointTotal += grid[point[1]][point[0]];
            }

            grid[y][x] = pointTotal;
        }
    }
}

while(grid[0][0] === 0) {
    walkGrid();
}

console.log(grid[0][0]);