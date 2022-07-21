/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]

 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    // for(let a = 0; a < nums.length; a++) {
    //     for(let b = a + 1; b < nums.length; b++) {
    //         if (nums[a] + nums[b] === target) {
    //             return [a, b];
    //         }
    //     }
    // }
    // return [];

    const tempObj = {};

    for (let i = 0; i < nums.length; i++) {

        const remaingValOfCurrent = target - nums[i];

        if (remaingValOfCurrent in tempObj) {
            return [tempObj[remaingValOfCurrent], i];
        }
        tempObj[nums[i]] = i;
    }

    return [];
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 3], 6));
