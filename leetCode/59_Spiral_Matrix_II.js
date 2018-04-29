题目：
Given a positive integer n, generate a square matrix filled with elements from 1 to n2 in spiral order.

Example:

Input: 3
Output:
[
 [ 1, 2, 3 ],
 [ 8, 9, 4 ],
 [ 7, 6, 5 ]
]



解决方案：（打败94.25）
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    let arr = new Array(n);
    for(let i = 0; i< arr.length;i++){
        arr[i]=[];
    }
    let minRow = 0;
    let maxRow = n-1;
    let num = 1;
    for(;minRow<=maxRow;){
        for(let i = minRow;i<=maxRow;i++){
            arr[minRow][i]=num;
            num++;
        }
        for(let i = minRow+1;i<maxRow;i++){
            arr[i][maxRow] = num;
            num++;
        }
        for(let i = maxRow;i>minRow;i--){
            arr[maxRow][i] = num;
            num++;
        }
        for(let i = maxRow;i>minRow;i--){
            arr[i][minRow] = num;
            num++;
        }
        maxRow--;
        minRow++;
        
    }
    return arr;
};




Testcases:
3
