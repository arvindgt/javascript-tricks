const obj = {
    start: 10,
    end: 15,
    [Symbol.iterator](){
        return this;
    },
    next() {
        if (obj.start <= obj.end) {
            return { value: obj.start++, done: false }
        } else {
            return { done: true }
        }
    }
}

for (let a of obj) {
    console.log(a);
}