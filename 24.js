// Write an algorithm to determine if a number n is happy.

// A happy number is a number defined by the following process:

// Starting with any positive integer, replace the number by the sum of the squares of its digits.
// Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy.
// Return true if n is a happy number, and false if not.

 

// Example 1:

// Input: n = 19
// Output: true
// Explanation:
// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1
// Example 2:

// Input: n = 2
// Output: false

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let listOfSum = [];
    let i = 0;
    while (n !== 1) {
        const nString = n.toString();
        let SquareTotal = 0;
        [...nString].forEach(c => {
            console.log('----', c, Math.pow(c, 2));
            SquareTotal += Math.pow(c, 2);
        });
        console.log(n, listOfSum);
        n = SquareTotal;
        if ((listOfSum.includes(n))) {
            break;
        }
        listOfSum.push(SquareTotal);
    }
    return n === 1;
};

console.log(isHappy(19));
console.log(isHappy(2));
