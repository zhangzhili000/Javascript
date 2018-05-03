问题：
Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.

Note: You can only move either down or right at any point in time.

Example:

Input:
[
  [1,3,1],
  [1,5,1],
  [4,2,1]
]
Output: 7
Explanation: Because the path 1→3→1→1→1 minimizes the sum.



解决方案：（打败100%）
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    let m = grid.length;
    let n = grid[0].length;
    for(let i = 0;i<m;i++){
        for(let j = 0;j<n;j++){
            if(i == 0 && j == 0){
                continue;
            }else if(j == 0){
                grid[i][j] += grid[i-1][j];
            }else if(i == 0){
                grid[i][j] += grid[i][j-1];
            }else if(grid[i-1][j] < grid[i][j-1]){
                grid[i][j] += grid[i-1][j];
            }else{
                grid[i][j] += grid[i][j-1];
            }
        }
    }
    return grid[m-1][n-1];
};



Testcases:
[[1,3,1],[1,5,1],[4,2,1]]
[[1,3,1],[1,5,1],[1,3,1],[1,5,1],[4,2,1],[1,5,1],[4,2,1],[1,5,1],[4,2,1]]