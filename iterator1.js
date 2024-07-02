const obj = {
    start: 10,
    end: 15
}

// const itr = obj[Symbol.iterator](); // not allowed due to an object: TypeError: obj[Symbol.iterator] is not a function
/**
 * Rule:
- hen you want to make an object literal utterable it should have method having key value as Symbol.iterator.
- The object literal should also have the next() method
 * 
 */

obj[Symbol.iterator] = function () {
    const itr = {
        next() {
            if (obj.start <= obj.end) {
                return { value: obj.start++, done: false }
            } else {
                return { done: true }
            }
        }
    }
    return itr;
}

for (let a of obj) {
    console.log(a);
}