function myClassStr(name) {
	this.name = this.name;

	return this.name;
}

function myClassObj(name) {
	this.name = name;
	return () => name;
}

var child1 = new myClassStr('Nodejs'); // child1 is an 'object'
// console.log(child1); // myClassStr { name: undefined }
var child2 = new myClassObj('JS'); // child2 is an function
// console.log(child2()); // JS

console.log(typeof child1, typeof child2);