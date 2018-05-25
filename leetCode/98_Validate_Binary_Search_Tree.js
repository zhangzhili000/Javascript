题目：
Given a binary tree, determine if it is a valid binary search tree (BST).

Assume a BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.



解决方案：（打败93.41%）
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    if(!root){
        return true;
    }

    return judge(root,null,null);
};
var judge = function(node,min,max){
    if(node === null){
        return true;
    }
    if(node.left!=null){
        if((node.left.val >= node.val) || (min && node.left.val <= min)){
            return false;
        }
    }
    if(node.right != null){
        if((node.right.val <= node.val) || (max && node.right.val >= max)){
            return false;    
        }
    }
    if(!judge(node.left,min,node.val)){
        return false;
    }
    if(!judge(node.right,node.val,max)){
        return false;
    }
    return true;
}



Testcases:
[2,1,3]
[5,1,4,null,null,3,6]
[1,1]
[10,5,15,null,null,6,20]
[]
[3,1,5,0,2,4,6]
[4,2,6,1,3,5,7]
[3,1,5,0,2,4,6,null,null,null,3]