/**
 * Problem: 876. Middle of the Linked List
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 1 ms (Beats 100%), Memory - 52.74 MB (79.91%)
 */

/**
 * Finds the middle node of a singly linked list
 *
 * @param {ListNode} head - The head of the linked list
 *
 * @returns {ListNode} - The middle node of the linked list
 */
const middleNode = (head) => {
  // Initialize slow and fast pointers
  let slow = head
  let fast = head

  // Move fast pointer two steps and slow pointer one step
  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
  }

  // Return the middle node
  return slow
}
