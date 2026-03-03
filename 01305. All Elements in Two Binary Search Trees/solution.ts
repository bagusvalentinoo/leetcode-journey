/**
 * Problem: 1305. All Elements in Two Binary Search Trees
 *
 * Difficulty: Medium
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 4 ms (Beats 100%)
 */

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

/**
 * Creates an in-order iterator for a binary search tree
 *
 * @param root - Root of the binary tree
 *
 * @returns Iterator function that returns next value in order
 */
const createInOrderIterator = (
  root: TreeNode | null
): (() => number | null) => {
  // Stack to maintain traversal state
  const stack: TreeNode[] = []

  // Pushes all left descendants onto the stack
  const pushLeftSpine = (node: TreeNode | null): void => {
    // While node is not null
    while (node !== null) {
      // Push node onto stack
      stack.push(node)
      // Move to left child
      node = node.left
    }
  }

  // Returns the next value in in-order traversal
  const next = (): number | null => {
    // If stack is empty, return null
    if (stack.length <= 0) return null

    // Pop the top node from stack
    const node: TreeNode = stack.pop() as TreeNode

    // Push the right child of the popped node onto stack
    pushLeftSpine(node.right)

    // Return the value of the popped node
    return node.val
  }

  // Push all left descendants of the root onto stack
  pushLeftSpine(root)

  // Return the next function
  return next
}

/**
 * Collects all values from both BSTs and returns them in sorted order
 *
 * @param root1 - Root of first binary search tree
 * @param root2 - Root of second binary search tree
 *
 * @returns Sorted array of all values from both trees
 */
const getAllElements = (
  root1: TreeNode | null,
  root2: TreeNode | null
): number[] => {
  // Array to store merged values
  const mergedValues: number[] = []

  // Create iterators for both trees
  const iterator1: () => number | null = createInOrderIterator(root1),
    iterator2: () => number | null = createInOrderIterator(root2)

  // Get the first value from each iterator
  let value1: number | null = iterator1(),
    value2: number | null = iterator2()

  // While there are still values to process
  while (value1 !== null || value2 !== null) {
    // If the second value is null or the first value is smaller
    if (value2 === null || (value1 !== null && value1 < value2)) {
      // Add the first value to the merged array
      mergedValues.push(value1)
      value1 = iterator1()
    } else {
      // Add the second value to the merged array
      mergedValues.push(value2 as number)
      value2 = iterator2()
    }
  }

  // Return the merged array
  return mergedValues
}
