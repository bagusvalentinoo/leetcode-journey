/**
 * Problem: 1315. Sum of Nodes with Even-Valued Grandparent
 *
 * Difficulty: Medium
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left),
 * right(right) {}
 * };
 */

class Solution {
private:
  // Helper function to sum values of direct children of a node
  int sumOfChildren(TreeNode *node) {
    // Base case: null node has no children
    if (node == nullptr)
      return 0;

    // Initialize accumulator for child values
    int total = 0;

    // Add left child value if exists
    if (node->left != nullptr)
      total += node->left->val;
    // Add right child value if exists
    if (node->right != nullptr)
      total += node->right->val;

    return total;
  }

public:
  int sumEvenGrandparent(TreeNode *root) {
    // Base case: null node contributes nothing
    if (root == nullptr)
      return 0;

    // If current node has even value, include its grandchildren
    if (root->val % 2 == 0)
      return sumOfChildren(root->left) + sumOfChildren(root->right) +
             sumEvenGrandparent(root->left) + sumEvenGrandparent(root->right);

    // If current node value is odd, just recurse without adding grandchildren
    return sumEvenGrandparent(root->left) + sumEvenGrandparent(root->right);
  }
};
