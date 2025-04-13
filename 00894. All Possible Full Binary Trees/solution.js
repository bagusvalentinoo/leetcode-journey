/**
 * Problem: 894. All Possible Full Binary Trees
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Generates all full binary trees with n nodes
 *
 * @param {number} n - Number of nodes
 *
 * @returns {TreeNode[]} - List of all possible full binary trees with n nodes
 */
const allPossibleFBT = (n) => {
  const memo = new Map()

  const build = (num) => {
    // Return cached result if available
    if (memo.has(num)) return memo.get(num)

    const result = []

    // Base case: single node tree
    if (num === 1) {
      result.push(new TreeNode(0))
    } else if (num % 2 === 1) {
      // Iterate over possible left subtree sizes
      for (let leftNodes = 1; leftNodes < num; leftNodes += 2) {
        // Calculate right subtree size
        const rightNodes = num - 1 - leftNodes

        // Build left and right subtrees recursively
        const leftTrees = build(leftNodes)
        const rightTrees = build(rightNodes)

        // Combine left and right subtrees
        // Build new tree with current left and right subtrees
        for (const l of leftTrees)
          for (const r of rightTrees) result.push(new TreeNode(0, l, r))
      }
    }

    // Store result in cache
    memo.set(num, result)

    return result
  }

  // Start building from n nodes
  return build(n)
}
