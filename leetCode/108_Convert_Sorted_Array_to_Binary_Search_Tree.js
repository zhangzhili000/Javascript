题目：
Given an array where elements are sorted in ascending order, convert it to a height balanced BST.

For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

Example:

Given the sorted array: [-10,-3,0,5,9],

One possible answer is: [0,-3,9,-10,null,5], which represents the following height balanced BST:

      0
     / \
   -3   9
   /   /
 -10  5




解决方案：（slice的方式传递新数组，不断的开辟新空间用来存放新数组，速度较慢，打败70.20%）
var sortedArrayToBST = function(nums) {
    if(nums.length === 0 || !nums){
        return null;
    }
    let pos = Math.floor((nums.length-1)/2);
    let mid = nums[pos];
    let root = new TreeNode(mid);
    root.left = sortedArrayToBST(nums.slice(0,pos));
    if(pos + 1 < nums.length){
        root.right = sortedArrayToBST(nums.slice(pos+1));    
    }else{
        root.right = null;
    }
    
    return root;
};



（传递起止index，速度较快，打败91.76%）

var sortedArrayToBST = function(nums, l = 0, r = nums.length - 1) {
    if(l > r){
        return null;
    }
    let pos = Math.floor((l+r)/2);
    let mid = nums[pos];
    let root = new TreeNode(mid);
    
    root.left = sortedArrayToBST(nums, l, pos - 1);
    root.right = sortedArrayToBST(nums,pos+1,r);    
    
    return root;
};




Testcases:
[-10,-3,0,5,9]