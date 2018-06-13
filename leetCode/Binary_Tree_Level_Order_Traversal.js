问题：
Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its level order traversal as:
[
  [3],
  [9,20],
  [15,7]
]



解决方案：
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
var levelOrder = function(root) {
    if(root === null){
        return [];
    }
    return breadthSearch([root]);
};
var breadthSearch = function(nodes){
    if(nodes.length === 0){
        return [];
    }
    let vals = [];
    let levelNodes = [];
    while(nodes.length > 0){
        let node = nodes.shift();
        vals.push(node.val);
        if(node.left){
            levelNodes.push(node.left);    
        }
        if(node.right){
            levelNodes.push(node.right);
        }
        
    }
    
    
    return [vals].concat(breadthSearch(levelNodes));
}




Testcases:
[3,9,20,null,null,15,7]
[3,9,20,null,null,15,7,2,4,3,2,1,3,3]