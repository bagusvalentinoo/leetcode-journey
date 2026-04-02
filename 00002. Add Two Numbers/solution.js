/**
 * Problem: 2. Add Two Numbers
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Adds two numbers represented as linked lists
 *
 * @param {ListNode} l1 - First linked list (digits in reverse order)
 * @param {ListNode} l2 - Second linked list (digits in reverse order)
 *
 * @returns {ListNode} Head of result linked list
 */
const addTwoNumbers = (l1, l2) => {
  // Initialize carry for addition
  let carry = 0

  // Create dummy head to simplify result list construction
  const dummyHead = new ListNode()

  // Pointer to track current node in result list
  let currentNode = dummyHead

  // Continue while there are digits in either list or carry exists
  while (l1 || l2 || carry) {
    // Calculate sum of current digits plus carry
    const sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry

    // Update carry for next digit (integer division by 10)
    carry = Math.floor(sum / 10)

    // Get current digit (remainder)
    const digit = sum % 10

    // Create new node with calculated digit
    const newNode = new ListNode(digit)

    // Append new node to result list
    currentNode.next = newNode
    // Move pointer to the new node
    currentNode = currentNode.next

    // Move to next nodes in input lists if they exist
    l1 = l1 && l1.next
    l2 = l2 && l2.next
  }

  // Return the actual head of result list (skip dummy node)
  return dummyHead.next
}
