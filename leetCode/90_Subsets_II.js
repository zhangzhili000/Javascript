题目：

Given a collection of integers that might contain duplicates, nums, return all possible subsets (the power set).

Note: The solution set must not contain duplicate subsets.

Example:

Input: [1,2,2]
Output:
[
  [2],
  [1],
  [1,2,2],
  [2,2],
  [1,2],
  []
]



解决方案：（打败100%）
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    let res = [];
    nums = nums.sort();
    function find(arr, start){
        res.push(arr.slice());
        for(let i = start; i< nums.length;i++){
            let j = i;
            while(nums[i] == nums[i+1]){
                i++;
            }
            arr.push(nums[i]);
            find(arr, j + 1);
            arr.pop();
        }
        return ;        
    }
    find([],0);
    return res;
};




Testcases:
[1,2,2]
[4,4,4,1,4]