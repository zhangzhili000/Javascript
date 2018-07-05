题目：
Given a triangle, find the minimum path sum from top to bottom. Each step you may move to adjacent numbers on the row below.

For example, given the following triangle

[
     [2],
    [3,4],
   [6,5,7],
  [4,1,8,3]
]
The minimum path sum from top to bottom is 11 (i.e., 2 + 3 + 5 + 1 = 11).



解决方案：（打败100%）动态规划
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    if(triangle.length <= 0){
        return 0;
    }
    for(let i = 0;i<triangle.length;i++){
        for(let j = 0;j<triangle[i].length;j++){
            if(i == 0){
                continue;    
            }else if(j == triangle[i].length - 1){
                triangle[i][j] += triangle[i-1][j-1];     
            }else if(j==0){
                triangle[i][j] += triangle[i-1][j];
            }else{
                triangle[i][j] += Math.min(triangle[i-1][j-1],triangle[i-1][j]);
            }
        }
    }
    return triangle.pop().sort((a,b)=>{return a-b;})[0];
};



Testcases:
[[2],[3,4],[6,5,7],[4,8,3,1]]
[[-1],[2,3],[1,-1,-3]]