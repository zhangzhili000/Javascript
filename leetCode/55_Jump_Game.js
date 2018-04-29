问题：
Given an array of non-negative integers, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Determine if you are able to reach the last index.

Example 1:

Input: [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
Example 2:

Input: [3,2,1,0,4]
Output: false
Explanation: You will always arrive at index 3 no matter what. Its maximum
             jump length is 0, which makes it impossible to reach the last index.


解决方案一：（仅打败69.64%）
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    if(nums.length < 2){
        return true;
    }
    let max = 0;
    max = find(nums,max,0);
    return (max>=nums.length-1)?true:false;
};
var find = function(nums,max,i){
    let maxrange = -1;
    for(let j = i;j<=nums[i]+i;j++){
        if(max < j+nums[j]){
            max = j+nums[j];
            maxrange = j;
        }
    }
    if(maxrange != -1){
        let tmpMax = find(nums,max,maxrange);    
        if(max < tmpMax){
            max = tmpMax;
        }
    }
    
    return max;
};


解决方案二：（打败100%）
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    if(nums.length < 2){
        return true;
    }
    let i = 0;
    let j = 0+nums[0];
    while(i<j){
        i++;
        if(i>=nums.length){
            return false;
        }
        if(i+nums[i]>j)
        j = i+nums[i];
        if(j>=nums.length-1){
            return true;
        }
    }
    return false;
};



Testcases:
[8,2,4,4,4,9,5,2,5,8,8,0,8,6,9,1,1,6,3,5,1,2,6,6,0,4,8,6,0,3,2,8,7,6,5,1,7,0,3,4,8,3,5,9,0,4,0,1,0,5,9,2,0,7,0,2,1,0,8,2,5,1,2,3,9,7,4,7,0,0,1,8,5,6,7,5,1,9,9,3,5,0,7,5]
[1,2,3]
[3,2,1,0,4]
[0]