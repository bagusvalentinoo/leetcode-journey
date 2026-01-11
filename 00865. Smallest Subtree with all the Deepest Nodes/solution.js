/**
 * Problem: 865. Smallest Subtree with all the Deepest Nodes
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Finds the smallest subtree containing all the deepest nodes
 *
 * @param {TreeNode} root - The root of the binary tree
 *
 * @returns {TreeNode} - The root of the smallest subtree containing all the deepest nodes
 */
const subtreeWithAllDeepest = root => {
    // Helper function for DFS traversal
    const findLowestAncestor = (node, depth = 0) => {
        // Base case: null node
        if (!node) return
        // Base case: leaf node
        if (!node.left && !node.right) return [node, 1]

        // Recursively find deepest nodes in left and right subtrees
        const left = findLowestAncestor(node.left, depth + 1)
        const right = findLowestAncestor(node.right, depth + 1)

        // Both subtrees have deepest nodes
        if (left && right) {
            // Left subtree has shallower deepest nodes
            if (left[1] < right[1]) {
                right[1]++
                return right
            }
            // Right subtree has shallower deepest nodes
            if (left[1] > right[1]) {
                left[1]++
                return left
            }
            // Both subtrees have deepest nodes at same depth
            // Current node is the lowest common ancestor
            return [node, left[1] + 1]
        }

        // Only left subtree has deepest nodes
        if (left) {
            left[1]++
            return left
        }

        // Only right subtree has deepest nodes
        if (right) {
            right[1]++
            return right
        }
    }

    // Return the root node of the smallest subtree
    return findLowestAncestor(root)[0]
}
