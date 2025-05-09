/**
 * Problem: 19. Remove Nth Node From End of List
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Remove the nth node from the end of a linked list
 *
 * @param {ListNode} head - Linked list head
 * @param {number} n - Position from end to remove
 *
 * @returns {ListNode} Modified list head
 */
const removeNthFromEnd = (head, n) => {
  // Helper function using recursion to find the nth node from end
  const findAndRemove = (node, n) => {
    if (!node.next) return 1

    // Recursively traverse to end and count position from end
    const pos = findAndRemove(node.next, n) + 1

    // When we find the node before our target, skip the next node
    if (pos === n + 1) node.next = node.next.next

    return pos
  }

  // Start the recursive traversal from head
  const pos = findAndRemove(head, n)

  // Handle edge case when we need to remove the head node
  return pos === n ? head.next : head
}
