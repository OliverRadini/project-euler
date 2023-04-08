
const size = 15;

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

const pathCache = {};

function getPathsFromTo (from, to) {
    if (pointsAreEqual(from, to)) {
        return [[from]];
    }

    const cacheKey = `${from.x} ${from.y} ${to.x} ${to.y}`;
    if (pathCache[cacheKey] !== undefined) {
        return pathCache[cacheKey];
    }

    const nextNodes = nextNodeCache[getKey(from.x, from.y)];

    const allPathsFromThisNode = nextNodes
        .map(node => getPathsFromTo(node, to));

    const flattenedPaths = allPathsFromThisNode
        .reduce(
            (p, c) => {
                for (let i = 0; i < c.length; i++) {
                    p.push(c[i]);
                }

                return p;
            },
            []
        )
        .map(x => {
            x.unshift(from);
            return x;
        });

    pathCache[cacheKey] = flattenedPaths;

    return flattenedPaths;
}


getPathsFromTo({x: 10, y: 10}, {x: size - 1, y: size - 1});
getPathsFromTo({x: 9, y: 10}, {x: size - 1, y: size - 1});
getPathsFromTo({x: 9, y: 9}, {x: size - 1, y: size - 1});
console.log(getPathsFromTo({x: 0, y: 0}, {x: size - 1, y: size - 1}).length);

module.exports = {
    getNextNodes,
    getPathsFromTo
};