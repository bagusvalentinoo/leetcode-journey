/**
 * Problem: 968. Binary Tree Cameras
 *
 * Difficulty: Hard
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Calculates the minimum number of cameras needed to monitor a binary tree
 *
 * @param {TreeNode} root - The root node
 *
 * @returns {number} - Minimum number of cameras required
 */
const minCameraCover = (root) => {
  // Track total number of cameras installed
  let cameras = 0

  // DFS function returning node states: 0=uncovered, 1=covered, 2=has camera
  const dfs = (node) => {
    // Null node is considered covered (no camera needed)
    if (!node) return 1

    const left = dfs(node.left),
      right = dfs(node.right)

    // If any child is uncovered, we must place a camera here
    if (left === 0 || right === 0) {
      cameras++
      return 2
    }

    // If any child has a camera, this node is covered; otherwise it's uncovered
    return left === 2 || right === 2 ? 1 : 0
  }

  // Process the tree starting from root
  const rootState = dfs(root)

  // If root ends up uncovered, we need an extra camera
  return rootState === 0 ? cameras + 1 : cameras
}
