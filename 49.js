/**
 * 1588. Sum of All Odd Length Subarrays
 * 
 * Given an array of positive integers arr, return the sum of all possible odd-length subarrays of arr.

A subarray is a contiguous subsequence of the array.

 

Example 1:

Input: arr = [1,4,2,5,3]
Output: 58
Explanation: The odd-length subarrays of arr and their sums are:
[1] = 1
[4] = 4
[2] = 2
[5] = 5
[3] = 3
[1,4,2] = 7
[4,2,5] = 11
[2,5,3] = 10
[1,4,2,5,3] = 15
If we add all these together we get 1 + 4 + 2 + 5 + 3 + 7 + 11 + 10 + 15 = 58
 */

/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function (arr) {
    const results = []

    for (let i = 0; i < arr.length; i++) {
        let counter = 0
        let sum = 0
        for (let j = i; j < arr.length; j++) {
            counter++
            sum += arr[j]
            if (counter % 2 !== 0) { results.push(sum) }
        }
    }

    return results.reduce((acc, curr) => acc + curr)
};

console.log(sumOddLengthSubarrays([1, 4, 2, 5, 3]));
