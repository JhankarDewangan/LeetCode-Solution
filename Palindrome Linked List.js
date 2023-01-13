// Given the head of a singly linked list, return true if it is a 
// palindrome
//  or false otherwise.

// Input: head = [1,2,2,1]
// Output: true
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let stack = [];
  let curr = head;
  while (curr) {
    stack.push(curr.val);
    curr = curr.next;
  }
  
  while (head) {
    if (head.val != stack.pop()) return false
    head = head.next
  }
  return true
};