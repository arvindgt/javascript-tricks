const key = {"a": "b"};
let obj = {"a": "b"};
obj[key] = "obj";

console.log(obj); // { a: 'b', '[object Object]': 'obj' }

for(let c of obj) {
	console.log(c); // TypeError: obj is not iterable
}