问题：
Given a collection of numbers that might contain duplicates, return all possible unique permutations.

Example:

Input: [1,1,2]
Output:
[
  [1,1,2],
  [1,2,1],
  [2,1,1]
]



解决方案：从46题修改而来，增加跳过相同值的部分（打败98.45%）
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    let res = [];
    nums = nums.sort((a,b)=>{return a-b;});
    res = getPerm(nums,res,[],nums.length);
    return res;
};

var getPerm = function(nums,res,tmpRes,numlen){
    if(numlen == tmpRes.length){
        res.push(tmpRes);
        return res;
    }
    for(let i=0;i<nums.length;i++){
        while(nums[i+1]==nums[i]){
            i++;
        }
        let tmp = nums.splice(i,1);
        getPerm(nums,res,tmpRes.concat(tmp),numlen);
        nums.splice(i,0,tmp[0]);
    }
    return res;
}


Testcases:
[1,1,2]
[1,1,2,1,1]