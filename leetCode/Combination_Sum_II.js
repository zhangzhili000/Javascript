问题：
Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sums to target.

Each number in candidates may only be used once in the combination.

Note:

All numbers (including target) will be positive integers.
The solution set must not contain duplicate combinations.
Example 1:

Input: candidates = [10,1,2,7,6,1,5], target = 8,
A solution set is:
[
  [1, 7],
  [1, 2, 5],
  [2, 6],
  [1, 1, 6]
]
Example 2:

Input: candidates = [2,5,2,1,2], target = 5,
A solution set is:
[
  [1,2,2],
  [5]
]



解决方案：（打败97.32）
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    let can = candidates.sort((a,b)=>{return a-b;});
    let tar = target;
    let res = [];
    let arr = [];
    bt(can,tar,0,arr,res,0,0);    
    return res;
};
//用start标记当前的根数字是哪一个，如果遇到相同的数字，跳过，避免重复使用。
function bt(can,tar,sum,arr,res,i,start){
    if(sum===tar){
        res.push(arr);
        return ;
    }
    if(sum > tar){
        return ;
    }
    for(;i<can.length;i++){
        if((sum+can[i])>tar){
            return ;
        }
        while(can[i]==can[i-1] && i != start){
            i++;
        }
        bt(can,tar,sum+can[i],arr.concat([can[i]]),res,i+1,i+1);
    }
    return ;
};




Testcases:
[10,1,2,7,6,1,5]
8