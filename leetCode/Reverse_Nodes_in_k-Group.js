题目：
Given a linked list, reverse the nodes of a linked list k at a time and return its modified list.

k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes in the end should remain as it is.

Example:

Given this linked list: 1->2->3->4->5

For k = 2, you should return: 2->1->4->3->5

For k = 3, you should return: 3->2->1->4->5

Note:

Only constant extra memory is allowed.
You may not alter the values in the list's nodes, only nodes itself may be changed.




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
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    if(k===1 || head == null || head.next == null){
        return head;
    }
    let newHead = new ListNode(0);
    let preNode = new ListNode(0);
    newHead.next = preNode;
    preNode.next = head;
    let start = head;
    let end = head;
    let counter = 1;
    while(end.next!=null){
      end = end.next;
      counter++;
      if(counter == k){
        let tmp = end.next;
        reverse(start,end);
        preNode.next = end;
        counter = 1;
        preNode = start;
        if(tmp == null){
          break;
        }
        end = tmp;
        start = tmp;
      }
    }
    return newHead.next.next;
};

var reverse = function(start,end){
    if(start.next != end){
        end = reverse(start.next,end);
    }
    let tmp = end.next;
    end.next = start;
    start.next = tmp;
    return start;    
};



Testcases:
[1,2,3,4,5]
2
[1,2,3,4,5]
1
[]
2
[1,2,3,4,51,2,3,1,21,2,31,2,3,4,5,4,5,3,4,54,5]
3