/**
 * 
 * @param {*} name 
 */

function Employee(name) {
	this.name = name;
	this.getName = () => this.name;
}

var emp = new Employee('John');

delete emp;

console.log(emp.getName());

/**
 * Any property declared with var cannot be deleted from the global scope or from a function's scope.
As such, delete cannot delete any functions in the global scope (whether this is part from a function definition or a function expression).
Functions which are part of an object (apart from the global scope) can be deleted with delete.
 */
