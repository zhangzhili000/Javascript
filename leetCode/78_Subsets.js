题目：
Given a set of distinct integers, nums, return all possible subsets (the power set).

Note: The solution set must not contain duplicate subsets.

Example:

Input: nums = [1,2,3]
Output:
[
  [3],
  [1],
  [2],
  [1,2,3],
  [1,3],
  [2,3],
  [1,2],
  []
]



解决方案：
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let res = [[]];
    sub(res,[],nums,nums.length,0);
    return res;
};
var sub = function(res,tmp,nums,k, start){
  if(k == 0){
      return ;
  }
  for(let i = start;i<nums.length;i++){
      tmp.push(nums[i]);
      res.push(tmp.slice());
      sub(res,tmp,nums,k-1, i+1);
      tmp.pop(nums[i]);
  }
};




Testcases:
[1,2,3]