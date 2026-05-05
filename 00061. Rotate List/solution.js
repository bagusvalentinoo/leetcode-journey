/**
 * Problem: 61. Rotate List
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Rotates a linked list to the right by k positions
 *
 * @param {ListNode} head - Head of the linked list
 * @param {number} k - Number of positions to rotate right
 *
 * @returns {ListNode} New head after rotation
 */
const rotateRight = (head, k) => {
  // Edge cases: empty list, single node, or no rotation needed
  if (!head || !head.next || k === 0) return head

  // Initialize length counter and pointer to find tail
  let listLength = 1,
    currentTail = head

  // Traverse to find the tail node and calculate list length
  while (currentTail.next) {
    // Move to next node
    currentTail = currentTail.next
    // Increment length counter
    listLength++
  }

  // Reduce k to effective rotations needed (k % length)
  const effectiveRotations = k % listLength

  // If no rotation needed after modulo, return original head
  if (effectiveRotations === 0) return head

  // Connect tail to head to form a cycle
  currentTail.next = head

  // Calculate steps to reach new tail (length - effectiveRotations)
  let stepsToNewTail = listLength - effectiveRotations

  // Start from tail and move to new tail position
  let newTailNode = currentTail

  // Move stepsToNewTail steps forward
  while (stepsToNewTail--) newTailNode = newTailNode.next

  // New head is the node after new tail
  const newHeadNode = newTailNode.next

  // Break the cycle by setting new tail's next to null
  newTailNode.next = null

  // Return the new head
  return newHeadNode
}
