题目：
Given a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list.

Example 1:

Input: 1->2->3->3->4->4->5
Output: 1->2->5
Example 2:

Input: 1->1->1->2->3
Output: 2->3



解决方案：（打败97.8%）
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
var deleteDuplicates = function(head) {
    if(head == null) return head;
    let newhead = new ListNode(0);
    newhead.next = head;
    let prenode = newhead;
    while(head && head.next){
        if(head.val == head.next.val){
            while(head.val == head.next.val){
                head = head.next;
                if(head.next == null) break;
            }
            prenode.next = head.next;
            head = head.next;
        }else{
            prenode = head;
            head = head.next;
        }    
    }
    return newhead.next;
};




Testcases:
[1,2,3,3,4,4,5,5,6,6]
[1,1,1,2,3]
[1,1]
[1,1,1]
[-1,0,0,0,0,3,3]