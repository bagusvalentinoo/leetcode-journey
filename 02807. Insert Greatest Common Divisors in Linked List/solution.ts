/**
 * Problem: 2807. Insert Greatest Common Divisors in Linked List
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
 * Inserts GCD between adjacent list nodes
 *
 * @param head - Linked list head
 *
 * @returns Modified list head
 */
const insertGreatestCommonDivisors = (
  head: ListNode | null
): ListNode | null => {
  // Helper function to calculate GCD using Euclidean algorithm
  const gcd = (a: number, b: number): number => {
    // Continue until remainder is 0
    while (b !== 0) {
      // Store b in temporary variable
      const temp: number = b

      // Set b to remainder of a divided by b
      b = a % b
      // Set a to the previous b value
      a = temp
    }

    // Return the GCD
    return a
  }

  // Pointer to traverse the linked list
  let currentNode: ListNode | null = head

  // Traverse until the second last node
  while (currentNode !== null && currentNode.next !== null) {
    // Get the next node
    const nextNode: ListNode = currentNode.next
    // Calculate GCD of current and next node values
    const gcdValue: number = gcd(currentNode.val, nextNode.val)
    // Create new node with GCD value
    const newNode: ListNode = new ListNode(gcdValue)

    // Insert GCD node between current and next nodes
    currentNode.next = newNode
    newNode.next = nextNode

    // Move to the next original node (skip the inserted GCD node)
    currentNode = nextNode
  }

  // Return the head of the modified list
  return head
}
