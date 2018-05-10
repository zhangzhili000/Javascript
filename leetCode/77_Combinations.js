题目：
Given two integers n and k, return all possible combinations of k numbers out of 1 ... n.

Example:

Input: n = 4, k = 2
Output:
[
  [2,4],
  [3,4],
  [2,3],
  [1,2],
  [1,3],
  [1,4],
]



解决方案：（打败98.13%）
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let res = [];
    addNum(res,[],n,k,0);
    return res;
};
var addNum = function(arr,tmparr,n,k,num){
    if(k == 0){
        arr.push(tmparr.slice());
        return;
    }
    for(let j = num+1;j<=n;j++){
        tmparr.push(j);
        addNum(arr,tmparr,n,k-1,j);
        tmparr.pop(j);
    }    
}



Testcases:
4
2