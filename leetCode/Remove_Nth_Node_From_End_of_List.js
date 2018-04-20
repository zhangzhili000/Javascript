题目：
Given a linked list, remove the n-th node from the end of list and return its head.

Example:

Given linked list: 1->2->3->4->5, and n = 2.

After removing the second node from the end, the linked list becomes 1->2->3->5.
Note:

Given n will always be valid.


解决方案：
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(node,n){
    //考虑到节点为空的情况
    if(node === null){
        return 0;
    }
    //考虑到节点只有一个的情况
    if(node.next === null){
        return [];
    }
    //定义第一个节点，前面跑的节点，要删除的节点，要删除节点的父节点，前面跑的节点的位置。
    let firstNode = node
    let preNode = node;
    let delNode = node;
    let backNode = node;
    let position = 1;
    //循环，知道前面跑的节点到达最后一个节点。
    while(preNode.next != null){
      preNode = preNode.next;
      position ++;
      if(position > n){
          delNode = delNode.next;
      }
      if(position>n+1){
          backNode = backNode.next;
      }
    }
    //如果前面跑的节点的位置等于要删除的n，说明要删除的是第一个节点。
    if(position === n){
        backNode = backNode.next;
        firstNode = backNode;
    }else{
        backNode.next = delNode.next;        
    }
    
    return firstNode;
}



Testcases:
[1,2,3,4,5]
2
[1,2,3,4,5]
1
[1]
1
[1,3,2]
2
[1,2]
2