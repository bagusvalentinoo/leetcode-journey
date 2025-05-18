/**
 * Problem: 971. Flip Binary Tree To Match Preorder Traversal
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Returns nodes to flip for matching the tree's pre-order traversal with voyage
 *
 * @param {TreeNode} root - Binary tree root
 * @param {number[]} voyage - Desired pre-order sequence
 *
 * @returns {number[]} - Flipped node values or [-1] if impossible
 */
const flipMatchVoyage = (root, voyage) => {
  // Store nodes we need to flip
  const flippedNodes = []
  // Track current position in voyage array
  let voyageIndex = 0

  // Helper function to check if we can match the tree with voyage by flipping nodes
  const matchVoyage = (node) => {
    // Base case: empty node always matches
    if (!node) return true
    // Mismatch if we've exhausted voyage or current node doesn't match voyage value
    if (voyageIndex >= voyage.length || node.val !== voyage[voyageIndex])
      return false

    // Save current position in voyage for backtracking
    const currentIndex = voyageIndex++

    // Try normal traversal (left then right)
    if (matchVoyage(node.left) && matchVoyage(node.right)) return true

    // Traversal failed, reset index to try flipping
    voyageIndex = currentIndex + 1

    // Check if flipping children would help (right child matches next in voyage)
    if (node.right && node.right.val === voyage[currentIndex + 1]) {
      // Record this node as one to flip
      flippedNodes.push(node.val)

      // Try flipped traversal (right then left)
      return matchVoyage(node.right) && matchVoyage(node.left)
    }

    // If we reach here, matching is impossible
    return false
  }

  // Check if entire tree can be matched with voyage
  const isPossible = matchVoyage(root)

  // Return flipped nodes if possible, otherwise [-1]
  return isPossible && voyageIndex === voyage.length ? flippedNodes : [-1]
}
