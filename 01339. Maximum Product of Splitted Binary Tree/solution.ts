/**
 * Problem: 1339. Maximum Product of Splitted Binary Tree
 *
 * Difficulty: Medium
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 9 ms (Beats 100%)
 */

/**
 * Calculate maximum product of sums after splitting binary tree by removing one edge
 *
 * @param root - Root node of the binary tree
 *
 * @returns - Maximum product modulo 10^9+7
 */
const maxProduct = (root: TreeNode | null): number => {
    // Initialize result object to store maximum product found
    let result = { value: 0 }
    // Calculate total sum of all node values in the tree
    let treeSum = getSum(root)

    // Calculate subtree sums and find maximum product
    getSum(root, result, treeSum)

    // Return maximum product modulo 10^9+7
    return Math.floor(result.value % (1e9 + 7))
}

/**
 * Helper function to calculate subtree sums and find maximum product
 *
 * @param root - Current node
 * @param result - Object to store maximum product
 * @param treeSum - Total sum of all nodes in the tree
 *
 * @returns - Sum of current subtree
 */
const getSum = (root: TreeNode | null, result: { value: number } | null = null, treeSum: number = 0): number => {
    // Base case: null node has sum 0
    if (root === null) return 0

    // Recursively calculate sums of left and right subtrees
    let leftSum = getSum(root.left, result, treeSum)
    let rightSum = getSum(root.right, result, treeSum)

    // Calculate sum of current subtree (including current node)
    let rootSum = root.val + leftSum + rightSum

    // Update maximum product if result object is provided
    // Product = current subtree sum * remaining tree sum
    if (result !== null) result.value = Math.max(result.value, rootSum * (treeSum - rootSum))

    // Return sum of current subtree
    return rootSum
}
