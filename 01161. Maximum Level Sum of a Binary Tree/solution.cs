/**
 * Problem: 1161. Maximum Level Sum of a Binary Tree
 *
 * Difficulty: Medium
 *
 * Language: C#
 *
 * Performance: Runtime - 3 ms (Beats 100%)
 */

public class Solution {
    // List to store sum of values at each level of the binary tree
    List<int> levelSum = new List<int>();
    
    public int MaxLevelSum(TreeNode root) {
        // Handle null root case (though problem guarantees non-null root)
        if (root != null) {
            // Add root value to level 0 sum
            levelSum.Add(root.val);
        }
        
        // Recursively calculate sum for left subtree starting from level 1
        if (root.left != null) {
            LevelSum(root.left, 1);
        }
        
        // Recursively calculate sum for right subtree starting from level 1
        if (root.right != null) {
            LevelSum(root.right, 1);
        }
        
        // Initialize variables to find level with maximum sum
        int max = levelSum[0];
        int maxPos = 0;
        
        // Iterate through all levels to find maximum sum
        for (int i = 0; i < levelSum.Count; i++) {
            if (levelSum[i] > max) {
                max = levelSum[i];
                maxPos = i;
            }
        }
        
        // Return 1-indexed level (add 1 to zero-based index)
        return maxPos + 1;
    }
    
    // Helper method to recursively calculate level sums using DFS
    public void LevelSum(TreeNode root, int depth) {
        // Check if we need to add new level to the list
        if (levelSum.Count == depth) {
            // Initialize new level with current node value
            levelSum.Add(root.val);
        }
        else {
            // Add current node value to existing level sum
            levelSum[depth] += root.val;
        }
        
        // Recursively process left child with increased depth
        if (root.left != null) {
            LevelSum(root.left, depth + 1);
        }
        
        // Recursively process right child with increased depth
        if (root.right != null) {
            LevelSum(root.right, depth + 1);
        }        
    }
}
