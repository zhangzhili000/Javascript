��Ŀ��
Given a linked list, remove the n-th node from the end of list and return its head.

Example:

Given linked list: 1->2->3->4->5, and n = 2.

After removing the second node from the end, the linked list becomes 1->2->3->5.
Note:

Given n will always be valid.


���������
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
    //���ǵ��ڵ�Ϊ�յ����
    if(node === null){
        return 0;
    }
    //���ǵ��ڵ�ֻ��һ�������
    if(node.next === null){
        return [];
    }
    //�����һ���ڵ㣬ǰ���ܵĽڵ㣬Ҫɾ���Ľڵ㣬Ҫɾ���ڵ�ĸ��ڵ㣬ǰ���ܵĽڵ��λ�á�
    let firstNode = node
    let preNode = node;
    let delNode = node;
    let backNode = node;
    let position = 1;
    //ѭ����֪��ǰ���ܵĽڵ㵽�����һ���ڵ㡣
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
    //���ǰ���ܵĽڵ��λ�õ���Ҫɾ����n��˵��Ҫɾ�����ǵ�һ���ڵ㡣
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