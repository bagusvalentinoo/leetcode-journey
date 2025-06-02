/**
 * Problem: 1008. Construct Binary Search Tree from Preorder Traversal
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Constructs a BST from a preorder traversal array
 *
 * @param {number[]} preorder - The preorder traversal of the BST
 *
 * @returns {TreeNode} - The root of the constructed BST
 */
const bstFromPreorder = (preorder) => {
  // Current position in the preorder array
  let currentIndex = 0

  // Recursive function to build BST with boundary constraints
  const buildTree = (lowerBound, upperBound) => {
    if (currentIndex >= preorder.length) return null

    const currentValue = preorder[currentIndex]

    // Current value is outside valid range for this subtree
    if (currentValue < lowerBound || currentValue > upperBound) return null

    currentIndex++

    // Create new node with current value
    const node = new TreeNode(currentValue)

    // Recursively build left subtree (values must be < currentValue)
    node.left = buildTree(lowerBound, currentValue)
    // Recursively build right subtree (values must be > currentValue)
    node.right = buildTree(currentValue, upperBound)

    return node
  }

  // Start building BST with infinite bounds
  return buildTree(-Infinity, Infinity)
}
