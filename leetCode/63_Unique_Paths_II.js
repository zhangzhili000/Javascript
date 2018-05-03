��Ŀ��
A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

Now consider if some obstacles are added to the grids. How many unique paths would there be?



��������������97.53%��ʹ�ö�̬�滮��ÿһ������ǿ����ߵģ�������ǰ��ĵ��·��������ӣ���Ϊ��������·�����������磺A->C��B->C��������A��B��·��������ӣ���Ϊ����C��·�������������λ�����ϰ������·����������Ϊ0.ע�⣺�ڵ�һ�������У������1����ȫ��Ϊ0�������0��������Ϊ1.

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