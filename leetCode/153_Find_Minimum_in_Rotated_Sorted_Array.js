问题：
Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e.,  [0,1,2,4,5,6,7] might become  [4,5,6,7,0,1,2]).

Find the minimum element.

You may assume no duplicate exists in the array.

Example 1:

Input: [3,4,5,1,2] 
Output: 1
Example 2:

Input: [4,5,6,7,0,1,2]
Output: 0



解决方案：（打败100%）
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let i = 0,j=nums.length-1;
    let mid = Math.floor((i+j)/2);
    let min = nums[i];
    while(i<j){
        if(nums[mid] > nums[i]){
            i = mid;
        }
        if(nums[mid] < nums[j]){
            j = mid;
        }
        if(i == j - 1){
            return nums[j];
        }
        mid = Math.floor((i+j)/2);
    }
    return min;
    
};



Testcases:
[3,4,5,1,2]
[0,1,2,4,5,6,7]
