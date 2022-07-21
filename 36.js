/**
 * 509 - Fibonacci Number
 * 
 * The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

F(0) = 0, F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1.
Given n, calculate F(n).

0, 1, 1, 2, 3, 5, 8, 13, 21...
 */

/**
 * @param {number} n
 * @return {number}
 */
var fibArr = [];
 var fib = function(n) {
    // if (n <= 1) {
    //     return n;
    // }

    // return fib(n-1) + fib(n-2);

    // =======

    // if (n <= 1) {
    //     return n;
    // }

    // if(fibArr[n] > 0) {
    //     return fibArr[n];
    // }

    // fibArr[n] = fib(n-1) + fib(n-2);
    // return fibArr;

    // =======

    // if(n <= 1){
    //     return n;
    //  } 
 
    //  let i=2;
    //  let a=0;
    //  let b=1;
    //  while(i<=n){
    //     let temp=a+b;
    //     a=b;
    //     b=temp;
    //     i++;
    //  }
    //  return b;

     // =======

    var first = 0;
    var second = 1;
    var i = 0; 
    var arr = [0, 1];
    
    while(i < n){
        var third = first+second;
        var first = second;
        var second = third;
        arr.push(third);
        i++;
    }
    return arr[n];

};

console.log(fib(2));
console.log(fib(3));
console.log(fib(4));
console.log(fib(5));
console.log(fib(6));
console.log(fib(7));

// console.log(fib(30));
