/**
* Invert a binary tree.

*      4
*    /   \
*   2     7
*  / \   / \
* 1   3 6   9
* to
*
*      4
*    /   \
*   7     2
*  / \   / \
* 9   6 3   1
*/


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
        if(root==null){
            return null;
        }
        var tmp = root.left;
        root.left = root.right;
        root.right = tmp;
        if(root.left!=null){
            root.left = invertTree(root.left);    
        }
        if(root.right!=null){
            root.right = invertTree(root.right);
        }
        return root;

};


Optimization:
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
        if(root==null){
            return null;
        }
        var tmp = root.left;
        root.left = invertTree(root.right);
        root.right = invertTree(tmp);

        return root;

};


Testcases:
[4,2,7,1,3,6,9]
[]
[6]
[3,5,2,5,43,5,43,24,35,43,4,3]
[2,null,3,4,null,1]
[2,5,null,null,3,null,1]