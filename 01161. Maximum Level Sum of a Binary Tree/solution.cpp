/**
 * Problem: 1161. Maximum Level Sum of a Binary Tree
 *
 * Difficulty: Medium
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
    int maxLevelSum(TreeNode* root) {
        // Vector to store sum of values at each level
        vector<long long> levelSum;
        // Queue for BFS traversal
        queue<TreeNode*> q;
        // Initialize sum for current level
        long long sum = 0;
        // Start with root node
        q.push(root);

        // BFS traversal
        while(!q.empty()) {
            // Get number of nodes at current level
            int size =  q.size();
            
            // Process all nodes at current level
            for (int i = 0; i < size; i++) {
                // Get front node from queue
                TreeNode* node = q.front();
                q.pop();
                // Add node value to current level sum
                sum += node->val;

                // Add left child to queue if exists
                if (node->left) q.push(node->left);
                // Add right child to queue if exists
                if (node->right) q.push(node->right);
            }
            
            // Store sum for current level and reset for next level
            levelSum.push_back(sum);
            sum = 0;
        }

        // Find index of maximum element and return 1-indexed level
        return max_element(levelSum.begin(), levelSum.end()) - levelSum.begin() + 1;
    }
};
