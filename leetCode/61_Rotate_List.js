问题：
Given a linked list, rotate the list to the right by k places, where k is non-negative.

Example 1:

Input: 1->2->3->4->5->NULL, k = 2
Output: 4->5->1->2->3->NULL
Explanation:
rotate 1 steps to the right: 5->1->2->3->4->NULL
rotate 2 steps to the right: 4->5->1->2->3->NULL
Example 2:

Input: 0->1->2->NULL, k = 4
Output: 2->0->1->NULL
Explanation:
rotate 1 steps to the right: 2->0->1->NULL
rotate 2 steps to the right: 1->2->0->NULL
rotate 3 steps to the right: 0->1->2->NULL
rotate 4 steps to the right: 2->0->1->NULL




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
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if(head == null){
        return [];
    }
    if(head.next == null){
        return head;
    }
    let last = head;
    let n = 0;
    while(last.next){
        n++;
        last = last.next;
    }
    k=Math.floor(k%(n+1));
    k = n+1-k;//本来是head要往father node的方向走，修改为往子节点方向走。
    for(;k>0;k--){
        if(last.next == null){
            last.next = head;    
        }
        last = last.next;
        head = head.next;
    }
    last.next = null;
    return head;
};




Testcases:
[1,2,3,4,5]
2
[1]
3
[1,2,3,4,5]
9
[]
9