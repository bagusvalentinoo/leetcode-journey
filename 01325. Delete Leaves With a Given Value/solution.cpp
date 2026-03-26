/**
 * Problem: 1325. Delete Leaves With a Given Value
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
public:
  TreeNode *removeLeafNodes(TreeNode *root, int target) {
    // Base case: null node returns null
    if (root == nullptr)
      return nullptr;

    // Recursively process left subtree
    root->left = removeLeafNodes(root->left, target);
    // Recursively process right subtree
    root->right = removeLeafNodes(root->right, target);

    // If current node becomes a leaf with target value, remove it
    if (root->val == target && root->left == nullptr && root->right == nullptr)
      return nullptr;

    // Otherwise keep the node
    return root;
  }
};
