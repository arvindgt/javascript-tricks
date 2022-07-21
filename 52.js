/**
 * 1572. Matrix Diagonal Sum
 * 
 * Given a square matrix mat, return the sum of the matrix diagonals.

Only include the sum of all the elements on the primary diagonal and all the elements on the secondary diagonal that are not part of the primary diagonal.
 */

/**
 * Input: mat = [[1,2,3],
              [4,5,6],
              [7,8,9]]
Output: 25
Explanation: Diagonals sum: 1 + 5 + 9 + 3 + 7 = 25
Notice that element mat[1][1] = 5 is counted only once.

Input: mat = [[1,1,1,1],
              [1,1,1,1],
              [1,1,1,1],
              [1,1,1,1]]
Output: 8

Example 3:

Input: mat = [[5]]
Output: 5
 */

/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function (mat) {
    let leftSum = 0;
    let rightSum = 0;
    let TotalSum;
    let CenterValue;
    const ArrLen = mat.length;
    
    for (let i = 0; i < ArrLen; i++) {
        leftSum += mat[i][i];
        rightSum += mat[(ArrLen - 1) - i][i]
    }
    TotalSum = leftSum + rightSum;

    if (ArrLen % 2 === 0) return TotalSum;

    CenterValue = mat[Math.floor(ArrLen / 2)][Math.floor(ArrLen / 2)]

    return TotalSum - CenterValue;
};

console.log(diagonalSum([[1, 2, 3],
[4, 5, 6],
[7, 8, 9]]));

console.log(diagonalSum([[1, 1, 1, 1],
[1, 1, 1, 1],
[1, 1, 1, 1],
[1, 1, 1, 1]]));

console.log(diagonalSum([[5]]));
