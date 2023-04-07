
const size = 3;

function getNextNodes (x, y, sizeIn) {
    const points = [];
    if (x < sizeIn - 1) {
        points.push({ x: x + 1, y });
    }

    if (y < sizeIn - 1) {
        points.push({ x, y: y + 1});
    }

    return points;
}

function getKey(x, y) {
    return `${x}, ${y}`;
}

function pointsAreEqual(a, b) {
    return a.x === b.x && a.y === b.y;
}


const nextNodeCache = {}
for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
        nextNodeCache[getKey(x, y)] = getNextNodes(x, y, size);
    }
}

function getPathsFromTo (from, to) {
    if (pointsAreEqual(from, to)) {
        return [];
    }

    const nextNodes = nextNodeCache[getKey(from.x, from.y)];

    const allPathsFromThisNode = nextNodes
        .map(node => getPathsFromTo(node, to));

    const flattenedPaths = allPathsFromThisNode
        .reduce(
            (p, c) => [...p, ...c],
            []
        )
        .map(x => [from, ...x]);

    console.log(`returning ${JSON.stringify(flattenedPaths)}`);

    return flattenedPaths;
}


console.log(nextNodeCache);


module.exports = {
    getNextNodes,
    getPathsFromTo
};