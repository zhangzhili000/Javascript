题目：
Given a binary tree, return the bottom-up level order traversal of its nodes' values. (ie, from left to right, level by level from leaf to root).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its bottom-up level order traversal as:
[
  [15,7],
  [9,20],
  [3]
]



解决方案：（打败99.32%）
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    if(!root){
        return [];
    }
    let res = [];
    let nodes = [root];
    let arr = [];
    while(nodes.length > 0){
        let tmp_nodes = [];
        for(let i = 0;i<nodes.length;i++){
            arr.push(nodes[i].val);
            if(nodes[i].left){
                tmp_nodes.push(nodes[i].left);    
            }
            if(nodes[i].right){
                tmp_nodes.push(nodes[i].right);    
            }
        }
        res.unshift(arr);
        arr = [];
        nodes = tmp_nodes;
    }
    return res;
};





Testcases:
[3,9,20,null,null,15,7]