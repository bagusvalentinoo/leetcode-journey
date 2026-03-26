/**
 * Problem: 1325. Delete Leaves With a Given Value
 *
 * Difficulty: Medium
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     public int val;
 *     public TreeNode left;
 *     public TreeNode right;
 *     public TreeNode(int val=0, TreeNode left=null, TreeNode right=null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

public class Solution
{
  public TreeNode RemoveLeafNodes(TreeNode root, int target)
  {
    // Base case: null node returns null
    if (root == null)
      return null;

    // Recursively process left subtree
    root.left = RemoveLeafNodes(root.left, target);
    // Recursively process right subtree
    root.right = RemoveLeafNodes(root.right, target);

    // If current node becomes a leaf with target value, remove it
    if (root.val == target && root.left == null && root.right == null)
      return null;

    // Otherwise keep the node
    return root;
  }
}
