
function mergeLists (l, r, f) {
    let li = 0;
    let ri = 0;
    let lx = null;
    let rx = null;
    let lMax = l.length;
    let rMax = r.length;

    const out = [];

    while (li < lMax && ri < rMax) {
        lx = l[li];
        rx = r[ri];

        if (f(lx, rx)) {
            out.push(lx);
            li++;
        } else {
            out.push(rx);
            ri++;
        }
    }

    while (li < lMax) {
        out.push(l[li]);
        li++;
    }

    while (ri < lMax) {
        out.push(r[ri]);
        ri++;
    }

    return out;
}

function mergeSort (f, xs) {
    // unsortable cases
    if (xs.length === 1 || xs.length === 0) {
        return xs;
    }

    // split
    let lists = xs.map(x => [x]);

    // merge lists
    while (lists.length > 1) {
        const newLists = [];

        for (let i = 0; i < lists.length - 1; i += 2) {
            newLists.push(mergeLists(lists[i], lists[i + 1], f));
        }

        lists = newLists;
    }

    return lists[0];
}

module.exports = {
   mergeSort 
};
