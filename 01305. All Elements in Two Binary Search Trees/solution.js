/**
 * Problem: 1305. All Elements in Two Binary Search Trees
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 4 ms (Beats 100%)
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * Creates an in-order iterator for a binary search tree
 *
 * @param {TreeNode} root - Root of the binary tree
 *
 * @returns {Function} Iterator function that returns next value in order
 */
const createInOrderIterator = (root) => {
  // Stack to maintain traversal state
  const stack = []

  // Pushes all left descendants onto the stack
  const pushLeftSpine = (node) => {
    // While node is not null
    while (node !== null) {
      // Push node onto stack
      stack.push(node)
      // Move to left child
      node = node.left
    }

    return
  }

  // Returns the next value in in-order traversal
  const next = () => {
    // If stack is empty, return null
    if (stack.length <= 0) return null

    // Pop the top node from stack
    const node = stack.pop()

    // Push the right child of the popped node onto stack
    pushLeftSpine(node.right)

    // Return the value of the popped node
    return node.val
  }

  // Push all left descendants of the root onto stack
  pushLeftSpine(root)

  // Return the next value in in-order traversal
  return next
}

/**
 * Collects all values from both BSTs and returns them in sorted order
 *
 * @param {TreeNode} root1 - Root of first binary search tree
 * @param {TreeNode} root2 - Root of second binary search tree
 *
 * @returns {number[]} Sorted array of all values from both trees
 */
const getAllElements = (root1, root2) => {
  // Array to store merged values
  const mergedValues = []

  // Create iterators for both trees
  const iterator1 = createInOrderIterator(root1),
    iterator2 = createInOrderIterator(root2)

  // Get the first value from each iterator
  let value1 = iterator1(),
    value2 = iterator2()

  // While there are still values to process
  while (value1 !== null || value2 !== null) {
    // If the second value is null or the first value is smaller
    if (value2 === null || (value1 !== null && value1 < value2)) {
      // Add the first value to the merged array
      mergedValues.push(value1)
      value1 = iterator1()
    } else {
      // Add the second value to the merged array
      mergedValues.push(value2)
      value2 = iterator2()
    }
  }

  // Return the merged array
  return mergedValues
}
