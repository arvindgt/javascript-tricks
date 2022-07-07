/**
 * 200. Number of Island
 * 
 * Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.
 */

/**
 * @param {character[][]} grid
 * @return {number}
 */
 var numIslands = function(grid) {
    let count = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === '1') {
        count++;
        color(grid, i, j); 
      }   
    }   
  }
  return count;
}

function color(grid, i, j) {
  let q = [[i, j]];
  while (q.length) {
    let [x, y] = q.pop();
    grid[x][y] = 0;
    for (let [newX, newY] of [[x + 1, y], [x, y + 1], [x - 1, y], [x, y - 1]]) {
      if (
        newX >= 0 &&
        newX < grid.length &&
        newY >= 0 &&
        newY < grid[0].length &&
        grid[newX][newY] === '1' 
      ) { 
        q.push([newX, newY]);
      }   
    }   
  }
};

/**
 * Example 1:

Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1
Example 2:

Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3
 

Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 300
grid[i][j] is '0' or '1'.
 */