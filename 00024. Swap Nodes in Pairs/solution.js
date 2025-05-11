/**
 * Problem: 24. Swap Nodes in Pairs
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Swaps every two adjacent nodes in a linked list
 *
 * @param {ListNode} head - Head of the linked list
 *
 * @returns {ListNode} - New head of the modified list
 */
const swapPairs = (head) => {
  // Return early if list is empty or has only one node
  if (!head || !head.next) return head

  // Save the second node as the new head after swap
  const newHead = head.next
  // Recursively swap rest of the list and connect to first node
  head.next = swapPairs(newHead.next)
  // Connect second node to first node
  newHead.next = head

  // Return new head after swap
  return newHead
}
