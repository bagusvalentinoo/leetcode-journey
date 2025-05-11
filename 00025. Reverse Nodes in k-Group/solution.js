/**
 * Problem: 25. Reverse Nodes in k-Group
 *
 * Difficulty: Hard
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Reverse nodes in a linked list in groups of k
 *
 * @param {ListNode} head - Head of the linked list
 * @param {number} k - Group size
 *
 * @returns {ListNode} - Head of the modified list
 */
const reverseKGroup = (head, k) => {
  // Count k nodes ahead to check if we have enough nodes to reverse
  let count = 0,
    current = head

  while (current && count < k) {
    current = current.next
    count++
  }

  // If less than k nodes remain, return the list as is
  if (count < k) return head

  // Initialize pointers for reversing k nodes
  let prev = null,
    next = null
  current = head

  // Reverse k nodes using standard linked list reversal technique
  for (let i = 0; i < k; i++) {
    next = current.next
    current.next = prev
    prev = current
    current = next
  }

  // Recursively reverse next group and connect with current group
  head.next = reverseKGroup(current, k)

  // Return new head of the reversed group
  return prev
}
