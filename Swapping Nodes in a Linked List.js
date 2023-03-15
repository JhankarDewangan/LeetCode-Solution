// You are given the head of a linked list, and an integer k.

// Return the head of the linked list after swapping the values of the kth node from the beginning and the kth node from the end (the list is 1-indexed).

// Input: head = [1,2,3,4,5], k = 2
// Output: [1,4,3,2,5]

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function(head, k) {
    let newHead= new ListNode(0,head);
    let slow=newHead, fast =newHead;
    let firstNode=null, secondNode=null;

    while(k>0){
        fast=fast.next;
        k-=1;
    }
    firstNode=fast;
    while(fast){
        fast=fast.next;
        slow=slow.next;
    }
    secondNode=slow;
    let temp=firstNode.val;
    firstNode.val=secondNode.val;
    secondNode.val=temp;

    return newHead.next;



};