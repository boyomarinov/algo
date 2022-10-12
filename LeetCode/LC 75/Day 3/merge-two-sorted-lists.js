
/* You are given the heads of two sorted linked lists list1 and list2.
Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
Return the head of the merged linked list.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

const mergeTwoLists = function (list1, list2) {
    if (!list1 && !list2) {
        const res = new ListNode();
        delete res.val;
        return res;
    }

    let head;
    let current;
    const addToList = (value) => {
        if (value === null || value === undefined) {
            return;
        }

        if (!head) {
            head = new ListNode(value);
            current = head;
        } else {
            const nextNode = new ListNode(value);
            current.next = nextNode;
            current = current.next;
        }
    }

    while ((list1 && list1.val) || (list2 && list2.val)) {
        const val1 = list1?.val;
        const val2 = list2?.val;
        if (!val1) {
            addToList(val2);
            list2 = list2.next;
        } else if (!val2) {
            addToList(val1);
            list1 = list1.next;
        } else {
            if (val1 < val2) {
                addToList(val1);
                list1 = list1.next;
            } else {
                addToList(val2);
                list2 = list2.next;
            }
        }
    }

    return head;
};

const mergeTwoListsRecursion(list1, list2) {
    if (list1 === null) {
        return list2;
    }
    if (list2 === null) {
        return list1;
    }
    if (list1.val < list2.val) {
        list1.next = mergeTwoLists(list1.next, list2);
        return list1;
    } else {
        list2.next = mergeTwoLists(list1, list2.next);
        return list2;
    }
}

console.log()