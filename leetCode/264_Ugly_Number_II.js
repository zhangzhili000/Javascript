题目：
Write a program to find the n-th ugly number.

Ugly numbers are positive numbers whose prime factors only include 2, 3, 5. 

Example:

Input: n = 10
Output: 12
Explanation: 1, 2, 3, 4, 5, 6, 8, 9, 10, 12 is the sequence of the first 10 ugly numbers.
Note:  

1. 1 is typically treated as an ugly number.
2. n does not exceed 1690.



解决方案：（打败96.04%）
/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    let res = [1];
    let twoIdx = 0;
    let thrIdx = 0;
    let fivIdx = 0;
    while(res.length < n){
        let newNum = Math.min(res[twoIdx]*2, Math.min(res[thrIdx]*3,res[fivIdx]*5));
        res.push(newNum);
        if(newNum/res[twoIdx] == 2){
            twoIdx++;
        }
        if(newNum/res[thrIdx] == 3){
            thrIdx++;
        }
        if(newNum/res[fivIdx] == 5){
            fivIdx++;
        }
    }
    return res.pop();
};




Testcases:
10
350
1000
1690