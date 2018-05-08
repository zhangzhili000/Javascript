题目：
Given a m x n matrix, if an element is 0, set its entire row and column to 0. Do it in-place.

Example 1:

Input: 
[
  [1,1,1],
  [1,0,1],
  [1,1,1]
]
Output: 
[
  [1,0,1],
  [0,0,0],
  [1,0,1]
]
Example 2:

Input: 
[
  [0,1,2,0],
  [3,4,5,2],
  [1,3,1,5]
]
Output: 
[
  [0,0,0,0],
  [0,4,5,0],
  [0,3,1,0]
]
Follow up:

A straight forward solution using O(mn) space is probably a bad idea.
A simple improvement uses O(m + n) space, but still not the best solution.
Could you devise a constant space solution?




解决方案： （打败90.20%）
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    for(let i = 0;i<matrix.length;i++){
        for(let j = 0;j<matrix[i].length;j++){
            if(matrix[i][j] == 0){
                clearLeft(matrix,i,j);
                clearRight(matrix,i,j);
                clearTop(matrix,i,j);
                clearBot(matrix,i,j);
            }
            if(matrix[i][j] == "#"){
                matrix[i][j] = 0;
            }
        }
    }
};
var clearLeft = function(matrix,i,j){
    for(let k = 0;k<j;k++){
        if(matrix[i][k] = "#")
        matrix[i][k] = 0;    
    }
};
var clearTop = function(matrix,i,j){
    for(let k = 0;k<i;k++){
        if(matrix[k][j] = "#")
        matrix[k][j] = 0;    
    }
};
var clearRight = function(matrix,i,j){
    for(let k = j;k<matrix[i].length;k++){
        if(matrix[i][k] != 0){
            matrix[i][k] = "#";    
        }
    }
};
var clearBot = function(matrix,i,j){
    for(let k = i;k<matrix.length;k++){
        if(matrix[k][j] != 0){
            matrix[k][j] = "#";    
        }
    }
};



Testcases:
[[1,1,1],[1,0,1],[1,1,1]]
[[0,1,2,0],[3,4,5,2],[1,3,1,5]]