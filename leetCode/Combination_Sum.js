���⣺
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


��������������91.71%��
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let res = [];
    let arr = [];
    //�������򣬼�������ʱ�䡣
    candidates = candidates.sort((a,b)=>{return a-b});
    for(let i in candidates){
        bt(candidates,target,candidates[i],arr.concat([candidates[i]]),res,i); 
	//������push��push�ķ���ֵ����Ҫpush��ȥ��Ԫ��.   
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
	//������ڵ����ּ���֮���Ѿ�����Ŀ�꣬����Ķ����Բ����ж�
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