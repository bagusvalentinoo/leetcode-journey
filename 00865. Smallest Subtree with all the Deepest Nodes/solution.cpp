/**
 * Problem: 865. Smallest Subtree with all the Deepest Nodes
 *
 * Difficulty: Medium
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
    // Helper function for DFS traversal using pair return
    pair<int, TreeNode*> dfs(TreeNode* root) {
        // Base case: null node has depth 0 and no subtree
        if (!root)
            return {0, nullptr};

        // Recursively find deepest nodes in left and right subtrees
        auto left = dfs(root->left);
        auto right = dfs(root->right);

        // Left subtree has deeper nodes
        if (left.first > right.first)
            return {left.first + 1, left.second};

        // Right subtree has deeper nodes
        if (right.first > left.first)
            return {right.first + 1, right.second};

        // Both subtrees have deepest nodes at same depth
        // Current node is the lowest common ancestor
        return {left.first + 1, root};
    }

    // Main function to find smallest subtree with all deepest nodes
    TreeNode* subtreeWithAllDeepest(TreeNode* root) {
        // Return the node from DFS traversal result
        return dfs(root).second;
    }
};
