/**
Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Note: The solution set must not contain duplicate triplets.

For example, given array S = [-1, 0, 1, 2, -1, -4],

A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    var target = 0;
    var output = [];
    nums = nums.sort(function(a,b){return a-b;});//排序
    for(var i=0;i<nums.length;i++){
        target = 0-nums[i];
        var j=i+1;
        var k = nums.length-1;

        while(j<k){
            var sum = nums[j]+nums[k];

            if(sum > target){
                k--;
            }else if(sum < target){
                j++;
            }else{

                var arr = [nums[i],nums[j],nums[k]];
                output.push(arr);
                while(j<k && nums[j]==arr[1])
                    j++;
                while(j<k && nums[k]==arr[2])
                    k--;
            }
        }
        while(nums[i+1]==nums[i])
            i++;
    }
    return output;

};
