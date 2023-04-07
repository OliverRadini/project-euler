const { getNextNodes, getPathsFromTo } = require("./015");

let lastCalledFunction = null;

function test (description, expected, actual) {
    if (lastCalledFunction !== testing) {
        console.log();
        console.log("-----------");
    }

    lastCalledFunction = testing;

    console.log(description.replace("It", testing));
    if (expected !== actual) {
        console.log(`❌ FAIL: ${expected} != ${actual}`);
    } else {
        console.log(`✔ PASS: ${expected} == ${actual}`);
    }
    console.log("");
}

let testing = "nothing";

// testing = "getNextNodes";
// test("It should find next nodes when they are available", getNextNodes(0, 0, 2).length, 2);

// test("It should only have one node when on the right side", getNextNodes(0, 2, 3).length, 1);

// test("It should only have one node when on the bottom", getNextNodes(0, 2, 3).length, 1);

// test("It should have no nodes when in the bottom right corner", getNextNodes(2, 2, 3).length, 0);

// // ---

// testing = "getPathsFromTo";

// test("It should return an empty path when already on the target", getPathsFromTo({x: 2, y: 2 }, {x: 2, y: 2}, []).length, 0);

// test("It should return a single path when one above the target", getPathsFromTo({ x: 2, y: 1}, {x: 2, y: 2}).length, 1);

// test("It should return a single path when one to the right of the target", getPathsFromTo({ x: 1, y: 2}, {x: 2, y: 2}).length, 1);

// test("It should return two paths when one to the right and above the target", getPathsFromTo({ x: 1, y: 1}, {x: 2, y: 2}).length, 2);

// test("It should return one path when two above the target", getPathsFromTo({ x: 2, y: 0 }, { x: 2, y: 2 }).length, 1);

// test("It should return an array of arrays", getPathsFromTo({ x: 0, y: 0 }, { x: 2, y: 2}).every(x => Array.isArray(x)), true);

// test(
//     "It should be able to construct one deep path and have all values in each path be a coordinate",
//     getPathsFromTo({ x: 1, y: 1 }, { x: 2, y: 2 })
//         .every(x => x.every(y => y.hasOwnProperty("x") && y.hasOwnProperty("y"))),
//     true
// );

// test(
//     "It should be able to construct multi-depth paths and have all values in each path be a coordinate",
//     getPathsFromTo({ x: 0, y: 0 }, { x: 2, y: 2 })
//         .every(x => x.every(y => y.hasOwnProperty("x") && y.hasOwnProperty("y"))),
//     true
// );

test(
    "It should return 6 paths when going from (0, 0) to (2, 2)",
    getPathsFromTo({ x: 0, y: 0 }, { x: 2, y: 2 }).length,
    6
);