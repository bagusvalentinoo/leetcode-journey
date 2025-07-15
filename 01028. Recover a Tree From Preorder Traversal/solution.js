/**
 * Problem: 1028. Recover a Tree From Preorder Traversal
 *
 * Difficulty: Hard
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 3 ms (Beats 100%)
 */

/**
 * Recovers a binary tree from its preorder traversal string
 *
 * @param {string} traversal - Preorder traversal string (e.g., "1-2--3--4-5")
 *
 * @returns {TreeNode|null} - Root node of the recovered tree
 */
const recoverFromPreorder = (traversal) => {
  // Initialize array to store nodes at each depth level
  const levels = []
  // Initialize index to traverse the input string
  let index = 0
  // Store the total length of the traversal string
  const n = traversal.length

  // Process each node in the preorder traversal string
  while (index < n) {
    // Initialize depth counter for current node
    let depth = 0

    // Count consecutive dashes to determine node depth
    while (index < n && traversal[index] === '-') {
      depth++
      index++
    }

    // Initialize value accumulator for current node
    let value = 0

    // Parse the numeric value of current node
    while (index < n && traversal[index] !== '-') {
      value = value * 10 + (traversal.charAt(index) - '0')
      index++
    }

    // Create new tree node with parsed value
    const node = new TreeNode(value)

    // Update or add node at current depth level
    if (depth < levels.length) levels[depth] = node
    // Add node to new depth level
    else levels.push(node)

    // Connect current node to its parent if not root
    if (depth > 0) {
      // Get parent node from previous depth level
      const parent = levels[depth - 1]

      // Attach as left child if parent has no left child
      if (parent.left === null) parent.left = node
      // Attach as right child if parent already has left child
      else parent.right = node
    }
  }

  // Return the root node (at depth 0)
  return levels[0]
}
