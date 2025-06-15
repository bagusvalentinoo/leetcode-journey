/**
 * Problem: 1019. Next Greater Node In Linked List
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 3 ms (Beats 100%)
 */

/**
 * Finds the next greater value for each node in a linked list
 *
 * @param {ListNode} head - The head of the linked list
 *
 * @returns {number[]} - Array of next greater values (0 if none exists)
 */
const nextLargerNodes = (head) => {
  // Store all linked list values in an array
  const nodeValues = [],
    // Stack to track indices of elements waiting for their next greater element
    indexStack = []

  // Initialize result array to store next greater values
  let nextGreaterValues = []

  // Traverse linked list and collect all values
  while (head !== null) {
    nodeValues.push(head.val)
    head = head.next
  }

  // Initialize result array with zeros (default when no greater element exists)
  nextGreaterValues = new Array(nodeValues.length).fill(0)

  // Process each element to find next greater elements
  for (let i = 0; i < nodeValues.length; i++) {
    // Pop indices from stack while current element is greater than stack top element
    while (
      indexStack.length > 0 &&
      nodeValues[i] > nodeValues[indexStack[indexStack.length - 1]]
    ) {
      const previousIndex = indexStack.pop()

      // Set next greater element for the popped index
      nextGreaterValues[previousIndex] = nodeValues[i]
    }

    // Push current index to stack
    indexStack.push(i)
  }

  return nextGreaterValues
}
