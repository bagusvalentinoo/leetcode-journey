/**
 * Problem: 61. Rotate List
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
 * Rotates a linked list to the right by k positions
 *
 * @param head - Head of the linked list
 * @param k - Number of positions to rotate right
 *
 * @returns New head after rotation
 */
const rotateRight = (head: ListNode | null, k: number): ListNode | null => {
  // Edge cases: empty list, single node, or no rotation needed
  if (!head || !head.next || k === 0) return head

  // Initialize length counter and pointer to find tail
  let listLength: number = 1
  let currentTail: ListNode = head

  // Traverse to find the tail node and calculate list length
  while (currentTail.next) {
    // Move to next node
    currentTail = currentTail.next
    // Increment length counter
    listLength++
  }

  // Reduce k to effective rotations needed (k % length)
  const effectiveRotations: number = k % listLength

  // If no rotation needed after modulo, return original head
  if (effectiveRotations === 0) return head

  // Connect tail to head to form a cycle
  currentTail.next = head

  // Calculate steps to reach new tail (length - effectiveRotations)
  let stepsToNewTail: number = listLength - effectiveRotations

  // Start from tail and move to new tail position
  let newTailNode: ListNode = currentTail

  // Move stepsToNewTail steps forward
  while (stepsToNewTail--) newTailNode = newTailNode.next as ListNode

  // New head is the node after new tail
  const newHeadNode: ListNode = newTailNode.next as ListNode

  // Break the cycle by setting new tail's next to null
  newTailNode.next = null

  // Return the new head
  return newHeadNode
}
