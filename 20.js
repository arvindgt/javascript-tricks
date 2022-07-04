/**
 * 
 * Given an integer array nums, return the largest perimeter of a triangle with a non-zero area, formed from three of these lengths. If it is impossible to form any triangle of a non-zero area, return 0.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {
    nums.sort((a, b) => a - b);
    let perimeter = 0;
    for(let a = nums.length - 1; a >= 0; a--) {
        if ((nums[a-1] + nums[a-2]) > nums[a]) {
            perimeter = nums[a-1] + nums[a-2] + nums[a];
            break
        }
    }
    return perimeter;
};


console.log(largestPerimeter([2, 1, 2]));
console.log(largestPerimeter([1, 1, 2]));
console.log(largestPerimeter([1,2,2,4,18,8]));
