题目：
Given a binary tree, return the inorder traversal of its nodes' values.

Example:

Input: [1,null,2,3]
   1
    \
     2
    /
   3

Output: [1,3,2]



解决方案：(打败100%）
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let res = [];
    traval(res,root);
    return res;
};
var traval = function(res,node){
    if(node === null){
        return true;
    }
    if(node.left){
        let tmp = node.left;
        node.left = null;
        traval(res,tmp);
    }
    if(node.left === null){
        res.push(node.val);
    }
    if(node.right){
        traval(res,node.right);
    }
    return true;
}



Testcases:
[1,null,2,3]
[1,null,2,3,null,2,3,null,2,3]