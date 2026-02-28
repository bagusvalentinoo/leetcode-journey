/**
 * Problem: 1302. Deepest Leaves Sum
 *
 * Difficulty: Medium
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  int deepestLeavesSum(TreeNode *root) {
    // Initialize queue for level-order traversal
    deque<TreeNode *> queue;
    queue.push_back(root);

    // Store sum of current level
    int currentLevelSum = 0;

    // Process tree level by level
    while (!queue.empty()) {
      // Get number of nodes in current level
      int levelSize = queue.size();

      // Reset sum for new level
      currentLevelSum = 0;

      // Process all nodes at current level
      for (int i = 0; i < levelSize; i++) {
        // Get next node from front of queue
        TreeNode *node = queue.front();
        queue.pop_front();

        // Add node value to current level sum
        currentLevelSum += node->val;

        // Add children to queue for next level
        if (node->left)
          queue.push_back(node->left);
        if (node->right)
          queue.push_back(node->right);
      }
    }

    // Return sum of deepest level
    return currentLevelSum;
  }
};
