
/**
 * 
 * 
Given an array of integers nums, calculate the pivot index of this array.

The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

Return the leftmost pivot index. If no such index exists, return -1.

 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    var result = -1;
    for (var c = 0; c < nums.length; c++) {
        var index = c;
        console.log(nums[c], index);
        var preIndexSum = 0;
        var postIndexSum = 0;
        for(let a = 0; a < index; a++) {
            preIndexSum += nums[a];
        }

        for(let b = index + 1; b <= nums.length - 1; b++) {
            postIndexSum += nums[b];
        }

        if (preIndexSum === postIndexSum) {
            result = index;
            break; // break doesn't work with Array.forEach();
        }
    };
    return result;
};

console.log(pivotIndex([1,7,3,6,5,6]));
