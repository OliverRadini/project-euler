/*
Starting in the top left corner of a 2×2 grid, and only being able to move
to the right and down, there are exactly 6 routes to the bottom right corner.

How many such routes are there through a 20×20 grid?
*/

const nodes = [];
const size = 5;

for (let x = 0; x < size; x++) {
    for (let y = 0; y < size; y++) {
        nodes[`${x}-${y}`] = { x, y };
    }
}

function buildEdgesForNode ({ x, y }) {
    return [
        [x+1, y],
        [x, y+1]
    ]
        .filter(([x1, y1]) => x1 >= 0 && x1 < size && y1 >= 0 && y1 < size)
        .map(([x1, y1]) => ({ from: { x, y } , to: { x: x1, y: y1 }}));
}

const edges = Object.values(nodes)
    .map(buildEdgesForNode)
    .flat();

const edgeLookup = edges.reduce((p, c) => {
    const key = `${c.from.x}, ${c.from.y}`;
    if (p[key] !== undefined) {
        p[key].push(c.to);
    } else {
        p[key] = [c.to];
    }
    return p;
}, {});


const foundPaths = [];
const pathQueue = [[{ x: 0, y: 0 }]];
while (true) {
    if (pathQueue.length % 100 === 0) {
        console.log(pathQueue.length);
        console.log(foundPaths.length);
    }
    if (pathQueue.length === 0) {
        break;
    }

    const workingPath = pathQueue[0];
    pathQueue.shift();

    const lastNode = workingPath[workingPath.length - 1];

    if (lastNode.x === size - 1 && lastNode.y === size - 1) {
        foundPaths.push([...workingPath, lastNode]);
        continue;
    }

    const nextNodes = edgeLookup[`${lastNode.x}, ${lastNode.y}`]
        .filter(a => !workingPath.some(b => a.x === b.x && a.y === b.y));

    if (nextNodes.length === 0) {
        continue;
    }

    const nextPaths = nextNodes.map(node => [...workingPath, node]);

    for (let path of nextPaths) {
        pathQueue.push(path);
    }
}

console.log(foundPaths.map(path => path.map(node => `(${node.x}, ${node.y})`).join(", ")));
console.log(foundPaths.map(x => x.length));
console.log(foundPaths.length);