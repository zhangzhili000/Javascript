题目：
Given a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.

You should preserve the original relative order of the nodes in each of the two partitions.

Example:

Input: head = 1->4->3->2->5->2, x = 3
Output: 1->2->2->4->3->5


解决方案：（打败98.11%）
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    if(head == null){
        return head;
    }
    if(head.next == null){
        return head;
    }
    let preHead = new ListNode(0);
    preHead.next = head;
    let newHead = head;
    let left = preHead;
    if(head.val < x){
        left = head;
    }
    function compare(node,preNode){
        let nextPre = node;
        let nextNode = node.next;
        if(node.val < x){
            preNode.next = node.next;
            nextNode = node.next;
            nextPre = preNode;
            if(left == preNode){
                nextPre = node;
            }
            let tmp = left.next;
            left.next = node;
            node.next = tmp;
            left = left.next;

        }
        if(nextNode != null){
            compare(nextNode, nextPre);
        }
    }
    compare(head.next,head);
    return preHead.next;
};



Testcases:
[1,4,3,2,5,2]
3
[1,5,7,8,5,4,5,3,2,1,3,4,3,2,5,2]
4
[]
0
[1,2,3]
4