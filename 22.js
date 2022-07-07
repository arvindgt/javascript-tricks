/**
 * 
There is a function signFunc(x) that returns:

1 if x is positive.
-1 if x is negative.
0 if x is equal to 0.
You are given an integer array nums. Let product be the product of all values in the array nums.

Return signFunc(product).
 */


/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
    if (nums.includes(0)) {
        return 0;
    }
    let minusCount = 0;
    for(let a = 0; a < nums.length; a++) {
        if (nums[a] < 0) {
            minusCount += 1;
        }
    }
    if (minusCount % 2 === 0) {
        return 1;
    } else {
        return -1;
    }
};

console.log(arraySign([-1,-2,-3,-4,3,1,1]));
console.log(arraySign([1,5,0,2,-3]));
console.log(arraySign([-1,1,-1,1,-1]));