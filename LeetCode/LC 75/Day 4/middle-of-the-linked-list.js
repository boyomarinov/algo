/* 
    Given the head of a singly linked list, return the middle node of the linked list.
    If there are two middle nodes, return the second middle node.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const middleNode = function (head) {
    let current = head;
    let count = 0;
    while (current) {
        current = current.next;
        count++;
    }

    let mid = Math.floor(count / 2);
    current = head;
    while (mid > 0) {
        current = current.next;
        mid--;
    }

    return current;
};

console.log(middleNode([1,2,3,4,5]));
