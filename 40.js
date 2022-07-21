/**
 * 62. Unique Paths
 * 
 * There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.

Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.

The test cases are generated so that the answer will be less than or equal to 2 * 109.

 */


/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
 var uniquePaths = function(m, n) {
    // Create a mXn grid
    const dp = Array(m+1).fill().map(() => Array(n + 1).fill(0));
    dp[1][1] = 1;
    
    for(let i = 0; i <= m; i++) {
        for(let j = 0; j <= n; j++) {
            let current = dp[i][j];
            if(j + 1 <= n) dp[i][j+1] += current;
            if(i + 1 <= m) dp[i + 1][j] += current;
        }
    }
    
     return dp[m][n];
};

console.log(uniquePaths(3, 7));
console.log(uniquePaths(3, 2));
