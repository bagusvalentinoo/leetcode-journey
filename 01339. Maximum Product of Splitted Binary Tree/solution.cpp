/**
 * Problem: 1339. Maximum Product of Splitted Binary Tree
 *
 * Difficulty: Medium
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
    // Modulo constant (10^9 + 7)
    long long mod = 1e9 + 7;
    // Variable to store total sum of all nodes in the tree
    long long total = 0;
    // Variable to store maximum product found
    long long ans = 0;

    // Helper function to calculate subtree sums and find maximum product
    long long subTreeSum(TreeNode* root) {
        // Base case: null node has sum 0
        if (root == NULL)
            return 0;

        // Recursively calculate sums of left and right subtrees
        long long leftSum = subTreeSum(root->left);
        long long rightSum = subTreeSum(root->right);

        // Update maximum product for split at left edge
        ans = max(ans, (leftSum * (total - leftSum)));
        // Update maximum product for split at right edge
        ans = max(ans, (rightSum * (total - rightSum)));

        // Return sum of current subtree (including current node)
        return leftSum + rightSum + root->val;
    }

    // Helper function to calculate total sum of all nodes in the tree
    void totalSum(TreeNode* root) {
        // Base case: null node
        if (root == NULL)
            return;

        // Add current node value to total
        total += root->val;
        
        // Recursively process left and right subtrees
        totalSum(root->left);
        totalSum(root->right);
    }

    // Main function to calculate maximum product of splitted binary tree
    int maxProduct(TreeNode* root) {
        // First pass: calculate total sum of all node values
        totalSum(root);
        // Second pass: calculate subtree sums and find maximum product
        subTreeSum(root);

        // Return maximum product modulo MOD
        return ans % mod;
    }
};