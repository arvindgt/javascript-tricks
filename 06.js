var count = 10;

function count() { return 20; }

console.log(typeof count); // number

console.log(count); // 10

console.log(count()); // TypeError: count is not a function

/**
 * because of Hoisting
 */