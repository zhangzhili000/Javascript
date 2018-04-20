题目：
Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

Example:

Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4


解决方案：
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {

    let head = new ListNode(0);
    let node = new ListNode(0);
    head.next = node;
    while(l1!=null && l2!= null){
      if(l1.val < l2.val){
        node.next = l1;
        l1 = l1.next;
        node = node.next;
      }else{
        node.next = l2;
        l2 = l2.next;
        node = node.next;
      }   
    }
    if(l1 == null){
        node.next = l2;
    }
    if(l2 == null){
        node.next = l1;
    }

    
    return head.next.next;
};


Testcases:
[1,2,4]
[1,3,4]
[]
[]
[1,2]
[]
[]
[1,2]
[1]
[1]

注：Your runtime beats 99.74 % of javascript submissions.