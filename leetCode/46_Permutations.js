题目：
Given a collection of distinct integers, return all possible permutations.

Example:

Input: [1,2,3]
Output:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]



解决方案：（打败98.37%）
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let res = [];
    res = getPerm(nums,res,[],nums.length);
    return res;
};

var getPerm = function(nums,res,tmpRes,numlen){
    if(numlen == tmpRes.length){
        res.push(tmpRes);
        return res;
    }
    for(let i=0;i<nums.length;i++){
        let tmp = nums.splice(i,1);
        getPerm(nums,res,tmpRes.concat(tmp),numlen);
        nums.splice(i,0,tmp[0]);
    }
    return res;
}



Testcases:
[1,2,3]
[1,4,6,2,3]