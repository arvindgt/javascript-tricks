const GenFun = function* () {
    console.log('output 1');
    yield 'test yield value';
    console.log('output 2');
    yield 'test 2';
    console.log('oputt 3');
}

const genObj = GenFun();

// console.log(genObj); // Object [Generator] {}
// console.log(genObj.next());
// console.log(genObj.next());
// console.log(genObj.next());

for (let o of genObj) {
    console.log(o);
}