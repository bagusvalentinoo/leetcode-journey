/**
 * Problem: 1022. Sum of Root To Leaf Binary Numbers
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Calculates the sum of all root-to-leaf binary numbers in a binary tree
 *
 * @param root - The root of the binary tree
 *
 * @returns The sum of all binary numbers formed by root-to-leaf paths
 */
const sumRootToLeaf = (root: TreeNode | null): number => {
  // Initialize sum accumulator
  let totalSum: number = 0

  // Depth-first traversal to accumulate binary values
  const dfs = (node: TreeNode | null, currentVal: number): void => {
    // Base case: null node does nothing
    if (!node) return

    // Update binary value: shift left (multiply by 2) and add current node's bit
    const newVal: number = currentVal * 2 + node.val

    // If leaf node, add to total sum
    if (node.left === null && node.right === null) {
      totalSum += newVal
    }

    // Recursively traverse left and right subtrees
    dfs(node.left, newVal)
    dfs(node.right, newVal)
  }

  // Start DFS from root with initial value 0
  dfs(root, 0)

  // Return the total sum
  return totalSum
}
