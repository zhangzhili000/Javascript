题目：
Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

    1
   / \
  2   2
 / \ / \
3  4 4  3
But the following [1,2,2,null,3,null,3] is not:
    1
   / \
  2   2
   \   \
   3    3



解决方案：（打败99.57%）
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
var isSymmetric = function(root) {
    return compare(root,root);
};
var compare = function(leftNode, rightNode){
    if(leftNode === null || rightNode === null){
        return leftNode === rightNode;
    }
    return (leftNode.val === rightNode.val)&&compare(leftNode.left,rightNode.right)&&compare(leftNode.right,rightNode.left);
}



Testcases：
[1,2,2,3,4,4,3]
[1,2,2,null,3,null,3]