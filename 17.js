/**
 * 
 * Given the head of a singly linked list, reverse the list, and return the reversed list.
 */

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
var reverseList = function(head) {
    // const reverseArray = [];
    // for(let a = head.length - 1; a >= 0; a--) {
    //     reverseArray.push(head[a]);
    // }
    // return reverseArray;

    let previousVal = null, next = null;
    while (head) {
        next = head.next
        head.next = previousVal;
        previousVal = head;
        head = next;
    }
    return previousVal;
};

console.log(reverseList([1,2,3,4,5]));
