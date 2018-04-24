题目：
Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

You are given a target value to search. If found in the array return its index, otherwise return -1.

You may assume no duplicate exists in the array.

Your algorithm's runtime complexity must be in the order of O(log n).

Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
Example 2:

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1



解决方案：
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let low = 0;
    let high = nums.length-1;
    function findRoot(){
        while(low < high){
            let mid = parseInt((low+high)/2);
            if(nums[mid] > nums[high]){
                low = mid + 1;
            }else{
                high = mid;
            }
        }
        return low;
    }
    let root = findRoot();
    low = 0;
    high = nums.length - 1;
    while(low <= high){//因为mid是向下取整，所以要判断到low = high的时候，mid才会等于high，若是没有等号，则当target为最后一个数的时候，无法判断到。
        let mid = parseInt((low+high)/2);
        let realMid = (mid + root)%nums.length;
        if(nums[realMid] === target){
            return realMid;
        }
        if(nums[realMid] < target){
            low = mid+1;
        }else{
            high = mid-1;
        }
    }
    return -1;
};



Testcases:
[4,5,6,7,0,1,2]
0
[9,1,2,3,4,5,6,7,8]
9