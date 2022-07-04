// 1480. Running Sum of 1d Array

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    var result = [];
    var sum = 0
    nums.forEach(n => result.push(sum += n));
    return result;
};

console.log(runningSum([1,1,1,1,1]));
