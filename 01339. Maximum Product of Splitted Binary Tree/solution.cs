/**
 * Problem: 1339. Maximum Product of Splitted Binary Tree
 *
 * Difficulty: Medium
 *
 * Language: C#
 *
 * Performance: Runtime - 5 ms (Beats 100%)
 */

public class Solution {
    // Constant for modulo operation (10^9 + 7)
    private const long MOD = 1_000_000_007;
    // Variable to store total sum of all nodes in the tree
    private long total = 0;
    // Variable to store maximum product found
    private long maxProd = 0;

    public int MaxProduct(TreeNode root) {
        // First pass: compute total sum of all node values
        total = SumTree(root);

        // Second pass: calculate subtree sums and find best split product
        SumTreeWithProduct(root);

        // Return maximum product modulo MOD
        return (int)(maxProd % MOD);
    }

    // Helper method to calculate sum of all nodes in the tree
    private long SumTree(TreeNode node) {
        // Base case: null node contributes 0 to sum
        if (node == null) return 0;
        // Recursively calculate sum = current node + left subtree + right subtree
        return node.val + SumTree(node.left) + SumTree(node.right);
    }

    // Helper method to calculate subtree sums and find maximum product
    private long SumTreeWithProduct(TreeNode node) {
        // Base case: null node has sum 0
        if (node == null) return 0;

        // Recursively calculate sums of left and right subtrees
        long left = SumTreeWithProduct(node.left);
        long right = SumTreeWithProduct(node.right);
        // Calculate sum of current subtree (including current node)
        long subtree = node.val + left + right;

        // Check split at left edge: product = left subtree sum * remaining tree sum
        if (left > 0) {
            long prod = left * (total - left);
            maxProd = Math.Max(maxProd, prod);
        }

        // Check split at right edge: product = right subtree sum * remaining tree sum
        if (right > 0) {
            long prod = right * (total - right);
            maxProd = Math.Max(maxProd, prod);
        }

        // Return sum of current subtree
        return subtree;
    }
}
