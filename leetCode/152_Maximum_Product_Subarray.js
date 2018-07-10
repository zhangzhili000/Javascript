题目：
Given an integer array nums, find the contiguous subarray within an array (containing at least one number) which has the largest product.

Example 1:

Input: [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.
Example 2:

Input: [-2,0,-1]
Output: 0
Explanation: The result cannot be 2, because [-2,-1] is not a subarray.



解决方案：（打败92.16%）
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    if(nums.length == 0){
        return 0;
    }
    let max = nums[0];
    let min = nums[0];
    let res = max;
    
    for(let i = 1;i<nums.length;i++){
        if(nums[i] > 0){
            max = Math.max(max*nums[i],nums[i]);
            min = Math.min(min*nums[i],nums[i]);
        }else{
            let tmp = max;
            max = Math.max(min*nums[i],nums[i]);
            min = Math.min(tmp*nums[i],nums[i]);
        }
        if(res < max){
            res = max;
        }
    }
    return res;
};



Testcases:
[2,3,-2,4]
[2,3,4,6,7,1,2,3,5,6,7]
[2,-3,-2,4]
[2,3,-4,6,7,0,1,2,3,-5,6,7]