题目：
Reverse a linked list from position m to n. Do it in one-pass.

Note: 1 ≤ m ≤ n ≤ length of list.

Example:

Input: 1->2->3->4->5->NULL, m = 2, n = 4
Output: 1->4->3->2->5->NULL


解决方案：（打败100%）
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
    if(m-n==0){
        return head;
    }
    let counter = 1;
    let start = head;
    let preStart = new ListNode(0);
    preStart.next = start;
    while(counter != m){
        preStart = start;
        start = start.next;
        counter++;
    }
    
    let end = start;
    let endNext = end.next;
    while(counter!=n){
        end = end.next;
        endNext = end.next;
        counter++;
    }
    preStart.next = end;
    counter = 0;
    let node = start;
    while(start!=end){
        node = start;
        start = start.next;
        preStart.next = start;
        node.next = endNext;
        endNext = node;
        end.next = endNext;
    }
    if(m == 1){
        head = preStart.next;
    }
    return head;
};



Testcases:
[1,2,3,4,5]
2
5
[3,5]
1
2