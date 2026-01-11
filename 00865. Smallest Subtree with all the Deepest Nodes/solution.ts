/**
 * Problem: 865. Smallest Subtree with all the Deepest Nodes
 *
 * Difficulty: Medium
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Finds the smallest subtree containing all the deepest nodes
 *
 * @param root - The root of the binary tree
 *
 * @returns - The root of the smallest subtree containing all the deepest nodes
 */
const subtreeWithAllDeepest = (root: TreeNode | null): TreeNode | null => {
    // Helper function for DFS traversal
    const findLowestAncestor = (node: TreeNode | null, depth: number = 0): [TreeNode, number] | null => {
        // Base case: null node
        if (!node) return null
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

        return null
    }

    // Return the root node of the smallest subtree
    return findLowestAncestor(root)![0]
}
