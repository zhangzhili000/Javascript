问题：
Given a set of candidate numbers (candidates) (without duplicates) and a target number (target), find all unique combinations in candidates where the candidate numbers sums to target.

The same repeated number may be chosen from candidates unlimited number of times.

Note:

All numbers (including target) will be positive integers.
The solution set must not contain duplicate combinations.
Example 1:

Input: candidates = [2,3,6,7], target = 7,
A solution set is:
[
  [7],
  [2,2,3]
]
Example 2:

Input: candidates = [2,3,5], target = 8,
A solution set is:
[
  [2,2,2,2],
  [2,3,3],
  [3,5]
]


解决方案：（打败91.71%）
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let res = [];
    let arr = [];
    //进行排序，减少运行时间。
    candidates = candidates.sort((a,b)=>{return a-b});
    for(let i in candidates){
        bt(candidates,target,candidates[i],arr.concat([candidates[i]]),res,i); 
	//不能用push，push的返回值是需要push进去的元素.   
    }
    return res;
};

function bt(can,tar,sum,arr,res,i) {
    if(sum===tar){
        res.push(arr);
        return ;
    }
    if(sum>tar){
        return ;
    }
    for(;i<can.length;i++){
	//如果现在的数字加上之后已经大于目标，后面的都可以不用判断
        if((sum+can[i])>tar){
            return ;
        }
        bt(can,tar,sum+can[i],arr.concat([can[i]]),res,i);
    }
    return ;
} 



Testcases:
[2,3,6,7]
7
[2,3,6,7]
1
[1,3,6,7]
1
[1,3,6,7]
2
[1,3,6,7]
3
[8,7,4,3]
11