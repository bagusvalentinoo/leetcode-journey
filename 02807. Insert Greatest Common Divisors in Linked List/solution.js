/**
 * Problem: 2807. Insert Greatest Common Divisors in Linked List
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
 * Inserts GCD between adjacent list nodes
 *
 * @param {ListNode} head - Linked list head
 *
 * @returns {ListNode} Modified list head
 */
const insertGreatestCommonDivisors = (head) => {
  // Helper function to calculate GCD using Euclidean algorithm
  const gcd = (a, b) => {
    // Continue until remainder is 0
    while (b !== 0) {
      // Store b in temporary variable
      const temp = b

      // Set b to remainder of a divided by b
      b = a % b
      // Set a to the previous b value
      a = temp
    }

    // Return the GCD
    return a
  }

  // Pointer to traverse the linked list
  let currentNode = head

  // Traverse until the second last node
  while (currentNode !== null && currentNode.next !== null) {
    // Get the next node
    const nextNode = currentNode.next
    // Calculate GCD of current and next node values
    const gcdValue = gcd(currentNode.val, nextNode.val)
    // Create new node with GCD value
    const newNode = new ListNode(gcdValue)

    // Insert GCD node between current and next nodes
    currentNode.next = newNode
    newNode.next = nextNode

    // Move to the next original node (skip the inserted GCD node)
    currentNode = nextNode
  }

  // Return the head of the modified list
  return head
}
