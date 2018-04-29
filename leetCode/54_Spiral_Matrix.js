题目：
Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

Example 1:

Input:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
Output: [1,2,3,6,9,8,7,4,5]
Example 2:

Input:
[
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9,10,11,12]
]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]



解决方案：
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if(matrix.length < 1){
        return matrix;
    }
    let res = [];
    let minRow = 0;
    let maxRow = matrix.length - 1;
    let minCol = 0;
    let maxCol = matrix[0].length - 1;
    for(let row = minRow; minRow <= maxRow && minCol <= maxCol;){
        for(let col = minCol;col <= maxCol; col ++){
            res.push(matrix[minRow][col]);
        }
        minRow++;
        if(minRow>maxRow){
            break;
        }
        for(let row = minRow;row <= maxRow; row++){
            res.push(matrix[row][maxCol]);
        }
        maxCol--;
        if(minCol > maxCol){
            break;
        }
        for(let col = maxCol; col >= minCol;col--){
            res.push(matrix[maxRow][col]);
        }
        maxRow--;
        for(let row = maxRow;row >= minRow;row--){
            res.push(matrix[row][minCol]);
        }
        minCol++;
        
    }
    return res;
};




Testcases:
[[1,2,3],[4,5,6],[7,8,9]]
[[1,2,3],[4,5,6],[7,8,9],[10,11,12]]
[[1,2,3,4],[5,6,7,8],[9,10,11,12]]
[[1,2,3],[4,5,6],[7,8,9],[10,11,12],[13,14,15]]
[[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15]]
[[1,2,3],[4,5,6],[7,8,9],[10,11,12],[13,14,15],[16,17,18]]
[[1,2,3,4,5,6,7,8,9,10],[11,12,13,14,15,16,17,18,19,20],[21,22,23,24,25,26,27,28,29,30]]
[]