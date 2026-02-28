/**
 * Problem: 1302. Deepest Leaves Sum
 *
 * Difficulty: Medium
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 1 ms (Beats 100%)
 */

/**
 * Calculates sum of values at the deepest level of a binary tree
 *
 * @param root - Root node of the binary tree
 *
 * @returns Sum of values at the deepest level
 */
const deepestLeavesSum = (root: TreeNode | null): number => {
  // Handle empty tree case
  if (!root) return 0

  // Track the deepest depth found so far
  let deepestDepth = 0
  // Track sum of values at deepest depth
  let sumAtDepth = 0

  // Recursively traverses tree to find deepest leaves and accumulate sum
  const traverseTree = (node: TreeNode, depth: number): void => {
    // If current depth is greater than previous deepest depth
    if (depth > deepestDepth) {
      // Reset sum with current node's value
      sumAtDepth = node.val
      // Update deepest depth
      deepestDepth = depth
    }
    // If current depth equals deepest depth
    else if (depth === deepestDepth)
      // Add current node's value to sum
      sumAtDepth += node.val

    // Recursively traverse left subtree
    if (node.left) traverseTree(node.left, depth + 1)
    // Recursively traverse right subtree
    if (node.right) traverseTree(node.right, depth + 1)
  }

  // Start traversal from root at depth 0
  traverseTree(root, 0)

  // Return sum of values at deepest level
  return sumAtDepth
}
