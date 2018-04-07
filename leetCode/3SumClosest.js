/**
Given an array S of n integers, find three integers in S such that the sum is closest to a given number, target. Return the sum of the three integers. You may assume that each input would have exactly one solution.

    For example, given array S = {-1 2 1 -4}, and target = 1.

    The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
**/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums = nums.sort(function(a,b){return a-b});
    var result = [];
    var closeSum = nums[0] + nums[nums.length-1] + nums[1];
    var minDiff = Math.abs(closeSum - target);
    for(var i = 1;i< nums.length-1;i++){
        var front = 0;
        var back = nums.length-1;
        while(front < i && i < back){
            var sum = nums[front] + nums[i] + nums[back];
            var diff = sum - target;
            if(diff==0){
                return sum;
            }else{
                if(minDiff>Math.abs(diff)){
                    minDiff = Math.abs(diff);
                    closeSum = sum;
                }
                if(diff<0){
                    front++;
                }else{
                    back--;
                }
            }
        }
    }
    return closeSum;
};



Testcase:
[0,0,0]
1
[1,3,5,3,4,5,3,4,6,3,70,23,25,13,64,43,65,54]
5
[-1,3,-5,3,-4,5,3,4,6,3,-70,23,-25,13,-64,43,-65,54]
5
[0,1,2]
0
[0,2,1,-3]
1