function* gen1() {
    console.log("from fun 1");
}

function* gen2() {
    yield* gen1();
}

const g = gen2();
console.log(g.next());

// console.log(g.return())// terminate further execution.