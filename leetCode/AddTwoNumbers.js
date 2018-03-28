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
var addTwoNumbers = function(l1, l2) {
  var output = new ListNode();
  if (l1.val + l2.val > 9) {
    output.val = l1.val + l2.val - 10;
    if (l1.next != null) {
      l1.next.val++;
    } else {
      l1.next = new ListNode();
      l1.next.val = 1;
    }

  } else {
    output.val = l1.val + l2.val;
  }
  var now = output;
  while (l1.next != null || l2.next != null) {
    var tmp = new ListNode();
    now.next = tmp;
    if (l1.next == null) {
      l1 = new ListNode(0);
    } else {
      l1 = l1.next;
    }
    if (l2.next == null) {
      l2 = new ListNode(0);
    } else {
      l2 = l2.next;
    }
    if (l1.val + l2.val > 9) {
      tmp.val = l1.val + l2.val - 10;
      if (l1.next != null) {
        l1.next.val++;
      } else {
        l1.next = new ListNode();
        l1.next.val = 1;
      }

    } else {
      tmp.val = l1.val + l2.val;
    }

    now = now.next;
  }
  return output;

};
