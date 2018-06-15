题目：
Given a binary tree, return the zigzag level order traversal of its nodes' values. (ie, from left to right, then right to left for the next level and alternate between).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its zigzag level order traversal as:
[
  [3],
  [20,9],
  [15,7]
]



解决方案：（打败83.47%）
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
var zigzagLevelOrder = function(root) {
    if(!root){
        return [];
    }
    let vals = [];
    let res = [];
    let nodes = [];
    res[0] = [];
    res[0].push(root.val);
    nodes[0] = [];
    nodes[0].push(root);
    for(let i = 0;i < nodes.length;i++){
      vals = [];
      let tmpNodes = [];
      for(let j = 0;j < nodes[i].length; j++){ 
              if(nodes[i][j].left){
                  tmpNodes.push(nodes[i][j].left);
              }
              if(nodes[i][j].right){
                  tmpNodes.push(nodes[i][j].right);
              }
      }
      if(i % 2 === 1){
        for(let j = 0;j < nodes[i].length; j++){
              if(nodes[i][j].left){
                  vals.push(nodes[i][j].left.val);
              }
              if(nodes[i][j].right){
                  vals.push(nodes[i][j].right.val);
              }
        }
      }else{
        for(let j = nodes[i].length - 1;j >= 0 ; j--){
              if(nodes[i][j].right){
                  vals.push(nodes[i][j].right.val);
              }
              if(nodes[i][j].left){
                  vals.push(nodes[i][j].left.val);
              }
        }
      }
      if(vals.length === 0){
          break;
      }
      res.push(vals);
      nodes.push(tmpNodes);
    }
    return res;
};




Testcases:
[3,9,20,null,null,15,7]
[1,2,3,4,null,null,5]
[0,2,4,1,null,3,-1,5,1,null,6,null,8]
[0,-4,-3,null,-1,8,null,null,3,null,-9,-2,null,4]