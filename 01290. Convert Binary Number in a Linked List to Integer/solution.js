/**
 * Problem: 1290. Convert Binary Number in a Linked List to Integer
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Converts binary linked list to decimal value
 *
 * @param {ListNode} head - Head of linked list
 *
 * @returns {number} - Decimal value
 */
const getDecimalValue = (head) => {
  // Initialize result to store the decimal value, starting at 0
  let result = 0

  // Traverse the linked list until we reach the end (null)
  while (head) {
    // Left shift result by 1 bit and OR with current node's binary value
    // This effectively multiplies result by 2 and adds the current bit
    result = (result << 1) | head.val

    // Move to the next node in the linked list
    head = head.next
  }

  // Return the final decimal value
  return result
}
