const arr = [5, 6, 7, 8];

const itr = arr[Symbol.iterator]();

// console.log(itr) // Object [Array Iterator] {}

console.log(itr.next()); // { value: 5, done: false }
console.log(itr.next()); // { value: 6, done: false }
console.log(itr.next()); // { value: 7, done: false }
console.log(itr.next()); // { value: 8, done: false }
console.log(itr.next()); // { value: undefined, done: true }