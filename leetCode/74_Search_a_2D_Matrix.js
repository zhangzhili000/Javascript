题目：
Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

Integers in each row are sorted from left to right.
The first integer of each row is greater than the last integer of the previous row.
Example 1:

Input:
matrix = [
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]
target = 3
Output: true
Example 2:

Input:
matrix = [
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]
target = 13
Output: false



解决方案：（打败98.55%）
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if(matrix.length == 0){
        return false;
    }
    let i = 0;
    let head = 0;
    let tail = matrix[0].length -1;
    for(;i<matrix.length;i++){
        if(matrix[i][head] <= target && matrix[i][tail] >= target){
            break;
        }
    }
    if(i >= matrix.length){
        return false;
    }
    for(let j = 0;j< matrix[i].length;j++){
        if(matrix[i][j] == target){
            return true;
        }
    }
    return false;
};




Testcases:
[[1,3,5,7],[10,11,16,20],[23,30,34,50]]
3
[[1,3,5,7],[10,11,16,20],[23,30,34,50]]
13
[[1,3,5,7],[10,11,16,20],[23,30,34,50]]
55
[[1,3,5,7],[10,11,16,20],[23,30,34,50]]
9
[]
0