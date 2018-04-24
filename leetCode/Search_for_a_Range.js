问题：
Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

Your algorithm's runtime complexity must be in the order of O(log n).

If the target is not found in the array, return [-1, -1].

Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]



解决方案：依然是注意while循环里面的结束条件，既要遍历到所有的index，又要防止死循环。
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let start = -1;
    let end = -1;
    let low = 0;
    let high = nums.length -1;
    function findStart(){
        let low = 0;
        let high = nums.length -1;
        let start = -1;
        while(low <= high){
            let mid = parseInt((low+high)/2);
            if(nums[mid] >= target){
                high = mid - 1;
            }
            if(nums[mid] < target){
                low = mid+1;
            }
            if(nums[mid] === target){
                start = mid;   
            }
        }
        return start;
    }
    function findEnd(choose){
        let low = 0;
        let high = nums.length -1;
        let end = -1;
        while(low <= high){
            let mid = parseInt((low+high)/2);
            if(nums[mid] > target){
                high = mid-1;
            }
            if(nums[mid] <= target){
                low = mid+1;
            }
            if(nums[mid] === target){
                end = mid;   
            }
        }
        return end;
    }
    start = findStart();
    end = findEnd();
    return [start,end];
};



Testcases:
[5,7,7,8,8,10]
8
[5,7,7,8,8,10]
6
[6,7,7,8,8,10]
6
[5,7,7,8,8,10]
10
[10]
6
[10]
10