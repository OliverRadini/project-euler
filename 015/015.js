/*
Starting in the top left corner of a 2×2 grid, and only being able to move
to the right and down, there are exactly 6 routes to the bottom right corner.


How many such routes are there through a 20×20 grid?
*/

/**
 * consider this as a graph of nodes
 * 
 * there are n nodes in a row
 * there are n rows
 * each node is connected to those around it
 * 
 * We can solve this as a linear programming problem
 * 
 * We, from each node, remember the path to the end,
 * and we can just build them up from there
 */
const nodes = [];
const size = 3;

for (let x = 0; x < size; x++) {
    for (let y = 0; y < size; y++) {
        nodes[`${x}-${y}`] = { x, y };
    }
}

function buildEdgesForNode ({ x, y }) {
    return [
        [x, y-1],
        [x-1, y], [x+1, y],
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

/**
 * 
 * @param {Object} from with x and y properties, the from node
 * @param {Object} to  with x and y properties, the target node
 * @param {Array<Object>} visited of visited coordinates
 * @returns an array of arrays of all possible paths, represnted as coordinate objects
 */
function buildPathsFromTo(from, to, visited = []) {
    if (from.x === to.x && from.y === to.y) {
        return [[to]];
    }

    const nextNodes = edgeLookup[`${from.x}, ${from.y}`]
        .filter(a => !visited.some(b => a.x === b.x && a.y === b.y));

    if (nextNodes.length === 0) {
        return null;
    }

    const nextVisited = [...visited, from];

    const nextPaths = nextNodes
        .flatMap(node => buildPathsFromTo(node, to, nextVisited))
        .reduce((p, c) => {
            if (c === null) { 
                return p;
            }

            return [...p, c];
        }, [])
        
    const withFrom = nextPaths
        .map(path => [from, ...path]);
       
    return withFrom;
}

const paths = buildPathsFromTo({ x: 0, y: 0}, {x: size - 1, y: size - 1});

console.log(edges);
console.log(edgeLookup);