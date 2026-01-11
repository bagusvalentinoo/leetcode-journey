/**
 * Problem: 865. Smallest Subtree with all the Deepest Nodes
 *
 * Difficulty: Medium
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution {
    // Helper method for DFS traversal using tuple return
    private (int depth, TreeNode node) Dfs(TreeNode root) {
        // Base case: null node has depth 0 and no subtree
        if (root == null) return (0, null);
        
        // Recursively find deepest nodes in left and right subtrees
        var left = Dfs(root.left);
        var right = Dfs(root.right);
        
        // Left subtree has deeper nodes
        if (left.depth > right.depth) return (left.depth + 1, left.node);
        
        // Right subtree has deeper nodes
        if (right.depth > left.depth) return (right.depth + 1, right.node);
        
        // Both subtrees have deepest nodes at same depth
        // Current node is the lowest common ancestor
        return (left.depth + 1, root);
    }

    // Main method to find smallest subtree with all deepest nodes
    public TreeNode SubtreeWithAllDeepest(TreeNode root) {
        // Return the node from DFS traversal result
        return Dfs(root).node;
    }
}
