//You are given two non-empty linked lists representing two non-negative
//integers. The digits are stored in reverse order, and each of their nodes contains a
//single digit. Add the two numbers and return the sum as a linked list.
//
// You may assume the two numbers do not contain any leading zero, except the
//number 0 itself.
//
//
// Example 1:
//
//
//Input: l1 = [2,4,3], l2 = [5,6,4]
//Output: [7,0,8]
//Explanation: 342 + 465 = 807.
//
//
// Example 2:
//
//
//Input: l1 = [0], l2 = [0]
//Output: [0]
//
//
// Example 3:
//
//
//Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
//Output: [8,9,9,9,0,0,0,1]
//
//
//
// Constraints:
//
//
// The number of nodes in each linked list is in the range [1, 100].
// 0 <= Node.val <= 9
// It is guaranteed that the list represents a number that does not have
//leading zeros.
//
// Related Topics Linked List Math Recursion 👍 18181 👎 3739


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function readListNode(data: ListNode) {
    let num = "";
    let current = data;
    let reverse = (str: string) => {
        let temp = [];
        let len = str.length;
        for (let i = 0; i <= len; i++) {
            temp.push(str.charAt(len - i));
        }
        return temp.join('');
    }

    while (current !== null) {
        num += current.val;
        current = current.next;
    }
    return Number(reverse(num));
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    return null;
};
//leetcode submit region end(Prohibit modification and deletion)

// 못품 https://medium.com/@eurobin4321/leetcode-2%EB%B2%88-%EB%AC%B8%EC%A0%9C-add-two-numbers-c21772cafc28
// 참고
