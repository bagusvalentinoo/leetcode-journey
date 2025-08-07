/**
 * Problem: 1110. Delete Nodes And Return Forest
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 51 ms (Beats 100%)
 */

/**
 * Deletes nodes with values in to_delete from the binary tree
 *
 * @param {TreeNode} root - Root of the binary tree
 * @param {number[]} to_delete - Values to delete
 *
 * @returns {TreeNode[]} - Roots of resulting forest
 */
const delNodes = (root, to_delete) => {
  // Convert the to_delete array into a Set for efficient lookup
  const toDeleteSet = new Set(to_delete)
  // Initialize an array to store the roots of the resulting forest
  const forestRoots = []

  // Helper function to perform DFS traversal and delete nodes
  const dfs = (currentNode, isRoot) => {
    // Base case: if the node is null, return null
    if (!currentNode) return null

    // Check if the current node needs to be deleted
    const shouldDelete = toDeleteSet.has(currentNode.val)

    // If the node is a root and should not be deleted, add it to the forest
    if (isRoot && !shouldDelete) forestRoots.push(currentNode)

    // Recursively process the left and right children
    currentNode.left = dfs(currentNode.left, shouldDelete)
    currentNode.right = dfs(currentNode.right, shouldDelete)

    // If the current node is deleted, return null to disconnect it from its parent
    return shouldDelete ? null : currentNode
  }

  // Start DFS traversal from the root, marking it as a root node
  dfs(root, true)

  // Return the array of roots representing the resulting forest
  return forestRoots
}
