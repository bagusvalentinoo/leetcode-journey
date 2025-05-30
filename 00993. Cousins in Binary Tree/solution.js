/**
 * Problem: 993. Cousins in Binary Tree
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Determines if two nodes in a binary tree are cousins
 *
 * @param {TreeNode} root - Binary tree root
 * @param {number} x - First node value
 * @param {number} y - Second node value
 *
 * @returns {boolean} - True if nodes are cousins
 */
const isCousins = (root, x, y) => {
  // Initialize depth tracking for both target nodes (default: not found)
  let xNodeDepth = -1,
    yNodeDepth = -1
  // Initialize parent tracking for both target nodes
  let xNodeParent = null,
    yNodeParent = null

  // Helper function to traverse the tree and find nodes
  const traverse = (node, depth, parent) => {
    if (!node) return

    // Check if current node matches either target value
    if (node.val === x) {
      xNodeDepth = depth
      xNodeParent = parent
    } else if (node.val === y) {
      yNodeDepth = depth
      yNodeParent = parent
    }

    // Stop traversal if both nodes are found
    if (xNodeDepth !== -1 && yNodeDepth !== -1) return

    // Continue traversal through both children
    traverse(node.left, depth + 1, node)
    traverse(node.right, depth + 1, node)
  }

  // Start traversal from root
  traverse(root, 0, null)

  // Nodes are cousins if they have same depth but different parents
  return xNodeDepth === yNodeDepth && xNodeParent !== yNodeParent
}
