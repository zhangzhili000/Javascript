/**
Given an array nums of n integers and an integer target, are there elements a, b, c, and d in nums such that a + b + c + d = target? Find all unique quadruplets in the array which gives the sum of target.

Note:

The solution set must not contain duplicate quadruplets.

Example:

Given array nums = [1, 0, -1, 0, -2, 2], and target = 0.

A solution set is:
[
  [-1,  0, 0, 1],
  [-2, -1, 1, 2],
  [-2,  0, 0, 2]
]
*/



/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    var output = [];
    if(nums.length < 4||nums===null){
        return output;
    }
    nums = nums.sort(function(a,b){return (a-b);});
    var len = nums.length;
    if((4*nums[0])>target||(4*nums[len-1])<target){
       return output;
    }
    
    var lower = 0;
 
    for(lower;lower< nums.length-3;lower++){
        var upper = nums.length-1; 
        for(upper;upper>2;upper--){
            var left = lower +1;
            var right = upper-1;
            var sum1 = nums[lower] + nums[upper];
            while(left<right){
                if(sum1 + nums[left] + nums[right] === target){
                    output.push([nums[lower], nums[left], nums[right], nums[upper]]);
                    left++;
                    while(nums[left] === nums[left-1] && left<right){
                        left++;
                    }
                }
                if(sum1 + nums[left] + nums[right] < target){
                    left++;
                    while(nums[left] === nums[left-1]&& left<right){
                        left++;
                    }
                }
                if(sum1 + nums[left] + nums[right] > target){
                    right--;
                    while(nums[right] === nums[right+1]&& left<right){
                        right--;
                    }
                }
            }
            while(nums[upper-1]===nums[upper]){
                upper--;
            }
        }
        while(nums[lower+1]===nums[lower]){
            lower++;
        }
    }
    return output;
    
};



Testcase:
[1,0,-1,0,-2,2]
0
[-3,-2,-1,0,0,1,2,3]
0
[-4,-3,-2,-1,0,0,1,2,3,4]
0