/**
 * Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.

 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    for (let l = 0, r = nums.length - 1; l <= r;) {
    const mid = Math.floor((l + r) / 2);
    if (nums[mid] === target) return mid;
    else if (nums[mid] < target) l = mid + 1;
    else r = mid - 1;
  }
  return -1;
};

console.log(search([-1,0,3,5,9,12]))