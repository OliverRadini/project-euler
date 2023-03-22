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
const nodes = {};
const size = 2;

for (let x = 0; x < size; x++) {
    for (let y = 0; y < size; y++) {
        nodes[`${x}-${y}`] = {
        };
    }
}


console.log(nodes)
