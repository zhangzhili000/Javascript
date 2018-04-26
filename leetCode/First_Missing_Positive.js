问题：
Given an unsorted integer array, find the smallest missing positive integer.

Example 1:

Input: [1,2,0]
Output: 3
Example 2:

Input: [3,4,-1,1]
Output: 2
Example 3:

Input: [7,8,9,11,12]
Output: 1
Note:

Your algorithm should run in O(n) time and uses constant extra space.




解决方案：（打败100%）
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    if(nums.length < 1){
        return 1;
    }
    for(let i = 1;i<=nums.length;i++){
        if(nums.indexOf(i) === -1){
            return i;
        }else{
            if(i==nums.length){
                return i+1;
            }
        }
    }
};



Testcases:
[1,2,0]
[3,4,-1,1]
[7,8,9,11,12]
[]