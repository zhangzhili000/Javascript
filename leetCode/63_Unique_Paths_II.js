题目：
A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

Now consider if some obstacles are added to the grids. How many unique paths would there be?



解决方案：（打败97.53%）使用动态规划，每一步如果是可以走的，将到达前面的点的路径数量相加，成为到这个点的路径数量。例如：A->C，B->C，将到达A和B的路径数量相加，即为到达C的路径数量。如果该位置是障碍物，则将其路径数量设置为0.注意：在第一个格子中，如果是1，则全部为0，如果是0，将其设为1.

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    let row = obstacleGrid.length;
    let column = obstacleGrid[0].length;
    for(let i = 0;i<row;i++){
        for(let j = 0;j<column;j++){
            if(i == 0 && j==0){
                obstacleGrid[i][j] = 1 - obstacleGrid[i][j];
                continue;
            }
            if(obstacleGrid[i][j] == 1){
                obstacleGrid[i][j] = 0;
            }else if(i == 0){
                obstacleGrid[i][j] = obstacleGrid[i][j-1];
            }else if(j == 0){
                obstacleGrid[i][j] = obstacleGrid[i-1][j];
            }else{
                obstacleGrid[i][j] = obstacleGrid[i-1][j] + obstacleGrid[i][j-1];
            }
        }
    }
    return obstacleGrid[row-1][column-1];
};




Testcases:
[[0,0,0],[0,1,0],[0,0,0]]
[[0,0]]
[[0],[0]]
[[1]]