题目：
Given a linked list, swap every two adjacent nodes and return its head.

Example:

Given 1->2->3->4, you should return the list as 2->1->4->3.
Note:

Your algorithm should use only constant extra space.
You may not modify the values in the list's nodes, only nodes itself may be changed.


解决方案：
1.按顺序调换，空间和时间花费较多。
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if(head == null){
        return head;
    }
    if(head.next == null){
        return head;
    }
    
    let preNode = new ListNode(0);
    preNode.next = head;
    let headNode = new ListNode(0);
    headNode.next = preNode;
    while(head!=null){
        let node = head.next;    
        if(node != null){
            change(preNode,head,node);
            preNode = preNode.next.next;
            head = head.next;
        }else{
            return headNode.next.next;
        }
    }
    return headNode.next.next;
};

var change = function(preNode,head,node){
    preNode.next = node;
    head.next = node.next;
    node.next = head;
    return;
};

2.递归。打败了100%的方案。


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if(head == null){
        return head;
    }
    if(head.next == null){
        return head;
    }
    let node = head.next;
    head.next = swapPairs(head.next.next);
    node.next = head;
    return node;
};




Testcases:
[1,2,3,4]
[1,2,3,4,5]
[]
[1]
[1,2]
[1,2,3,4,51,2,1,2,3,4,51,2,1,2,3,4,53,4,53,4,5]