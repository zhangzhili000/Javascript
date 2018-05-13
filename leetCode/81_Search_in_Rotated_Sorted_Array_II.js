题目：
Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., [0,0,1,2,2,5,6] might become [2,5,6,0,0,1,2]).

You are given a target value to search. If found in the array return true, otherwise return false.

Example 1:

Input: nums = [2,5,6,0,0,1,2], target = 0
Output: true
Example 2:

Input: nums = [2,5,6,0,0,1,2], target = 3
Output: false
Follow up:

This is a follow up problem to Search in Rotated Sorted Array, where nums may contain duplicates.
Would this affect the run-time complexity? How and why?





解决方案：（打败100%）
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    let len = nums.length;
    if (len === 0) {
        return false;
    }
    let start = 0;
    let end = len - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (nums[mid] == target || nums[start] == target || nums[end] == target) {
            return true;
        }
        if (nums[mid] < nums[end]) {
            if (target > nums[mid] && target <= nums[end]) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        } else if (nums[mid] > nums[end]) {
            if (target < nums[mid] && target >= nums[start]) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        } else {
            end--;
        }
    }
    return false;
};



Testcases:
[2,5,6,0,0,1,2]
0
[5,6,0,0,1,2,2]
0
[3,1]
1
[3,1]
3
[1,2,3,4,4,5,6,6]
5
[1,2,3,3,4,4,5,6,6]
5
[3,1,1,1]
3
[1,3]
3
[1,1,3,1]
3
