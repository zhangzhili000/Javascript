问题：
Given an integer n, generate all structurally unique BST's (binary search trees) that store values 1 ... n.

Example:

Input: 3
Output:
[
  [1,null,3,2],
  [3,2,null,1],
  [3,1,null,null,2],
  [2,1,3],
  [1,null,2,null,3]
]
Explanation:
The above output corresponds to the 5 unique BST's shown below:

   1         3     3      2      1
    \       /     /      / \      \
     3     2     1      1   3      2
    /     /       \                 \
   2     1         2                 3






解决方案：（打败95.12%）
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
    if(n <= 0){
        return [];
    }
    let res;
    res = genTrees(1,n);
    return res;
};
var genTrees = function(start,end){
    if(start>end){
        return [null];
    }
    if(start === end){
        return [new TreeNode(start)];
    }
    let arr = [];
    for(let i = start;i<=end;i++){
        let leftSubtree = genTrees(start,i-1);
        let rightSubtree = genTrees(i+1,end);
        for(let j in leftSubtree){
            for(let k in rightSubtree){
                let tmp = new TreeNode(i);
                tmp.left = leftSubtree[j];
                tmp.right = rightSubtree[k];
                arr.push(tmp);
            }
        }
    }
    return arr;
    
}




Testcases:
4
0
1