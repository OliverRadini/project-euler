const { getNextNodes, getPathsFromTo, getPreviousNodes } = require("./015");

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

testing = "getNextNodes";
test("It should find next nodes when they are available", getNextNodes(0, 0, 2).length, 2);

test("It should only have one node when on the right side", getNextNodes(0, 2, 3).length, 1);

test("It should only have one node when on the bottom", getNextNodes(0, 2, 3).length, 1);

test("It should have no nodes when in the bottom right corner", getNextNodes(2, 2, 3).length, 0);

// ---

testing = "getPathsFromTo";

test("It should return one path when already on the target", getPathsFromTo({x: 2, y: 2 }, {x: 2, y: 2}, []).length, 1);

test("It should return a path with a single node when already on the target", getPathsFromTo({x: 2, y: 2 }, {x: 2, y: 2}, [])[0][0].x, 2);

test("It should return a single path when one above the target", getPathsFromTo({ x: 2, y: 1}, {x: 2, y: 2}).length, 1);

test("It should return a single path when one to the right of the target", getPathsFromTo({ x: 1, y: 2}, {x: 2, y: 2}).length, 1);

test("It should return two paths when one to the right and above the target", getPathsFromTo({ x: 1, y: 1}, {x: 2, y: 2}).length, 2);

test("It should return one path when two above the target", getPathsFromTo({ x: 2, y: 0 }, { x: 2, y: 2 }).length, 1);

test("It should return an array of arrays", getPathsFromTo({ x: 0, y: 0 }, { x: 2, y: 2}).every(x => Array.isArray(x)), true);

test("It should return 6 paths when going from (0, 0) to (2, 2)", getPathsFromTo({ x: 0, y: 0 }, { x: 2, y: 2}).length, 6);

testing = "getBackwardsSurroundingSquares";

test("It should return 1 point when at the top", getPreviousNodes(2, 0).length, 1);

test("It should return 1 point when on the left", getPreviousNodes(0, 2).length, 1);

test("It should return 2 points when not on an edge", getPreviousNodes(2, 2).length, 2);

test("It should return 0 points when in the top left", getPreviousNodes(0, 0).length, 0);

