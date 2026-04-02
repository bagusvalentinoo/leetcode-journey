/**
 * Problem: 2. Add Two Numbers
 *
 * Difficulty: Medium
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

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

/**
 * Adds two numbers represented as linked lists
 *
 * @param l1 - First linked list (digits in reverse order)
 * @param l2 - Second linked list (digits in reverse order)
 *
 * @returns Head of result linked list
 */
const addTwoNumbers = (
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null => {
  // Initialize result list pointers
  let resultHead: ListNode | null = null,
    currentTail: ListNode | null = null

  // Pointers to traverse input lists
  let pointer1: ListNode | null = l1,
    pointer2: ListNode | null = l2

  // Carry from previous addition
  let carry: number = 0

  // Continue while there are digits in either list or carry exists
  while (pointer1 !== null || pointer2 !== null || carry !== 0) {
    // Get current digit values (0 if node doesn't exist)
    const digit1: number = pointer1 === null ? 0 : pointer1.val,
      digit2: number = pointer2 === null ? 0 : pointer2.val

    // Calculate sum of digits plus carry
    let sum: number = digit1 + digit2 + carry

    // Check if sum exceeds single digit (9)
    if (sum > 9) {
      // Set carry to 1 for next digit
      carry = 1
      // Subtract 10 to get the digit for current node
      sum = sum - 10
    }
    // If sum is within 0-9, no carry needed
    else carry = 0

    // Create new node with calculated digit
    let newNode: ListNode = new ListNode(sum, null)

    // Set as head if result list is empty
    if (resultHead === null) resultHead = newNode

    // If current tail is null, this is the first node added
    if (currentTail === null) currentTail = newNode
    // Otherwise, append to the end of the result list
    else {
      currentTail.next = newNode
      currentTail = newNode
    }

    // Move to next nodes in input lists
    pointer1 = pointer1?.next ?? null
    pointer2 = pointer2?.next ?? null
  }

  // Return the head of the result list
  return resultHead
}
