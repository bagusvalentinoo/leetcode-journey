/**
 * Problem: 1022. Sum of Root To Leaf Binary Numbers
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  int sumRootToLeaf(TreeNode *root) {
    // Start DFS from root with initial value 0
    return dfs(root, 0);
  }

private:
  int dfs(TreeNode *node, int currentValue) {
    // Base case: null node contributes nothing
    if (!node)
      return 0;

    // Shift current value left and add current node's bit
    int newValue = (currentValue << 1) | node->val;

    // If leaf node, return the complete binary number
    if (!node->left && !node->right)
      return newValue;

    // Recursively sum values from left and right subtrees
    return dfs(node->left, newValue) + dfs(node->right, newValue);
  }
};
