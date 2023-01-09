//Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.
//Input: head = [1,1,2]
// Output: [1,2]

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    if(head===null) return head;
  let node  = head;
  while(node && node.next) {
      if(node.next.val === node.val) {
          node.next = node.next.next
      }else {
          node = node.next
      }
  }
  return head;
};