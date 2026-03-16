/**
 * Problem: 1315. Sum of Nodes with Even-Valued Grandparent
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
  // Helper function to sum values of direct children of a node
  private int SumOfChildren(TreeNode node)
  {
    // Base case: null node has no children
    if (node == null)
      return 0;

    // Initialize accumulator for child values
    int total = 0;

    // Add left child value if exists
    if (node.left != null)
      total += node.left.val;
    // Add right child value if exists
    if (node.right != null)
      total += node.right.val;

    return total;
  }

  public int SumEvenGrandparent(TreeNode root)
  {
    // Base case: null node contributes nothing
    if (root == null)
      return 0;

    // If current node has even value, include its grandchildren
    if (root.val % 2 == 0)
      return SumOfChildren(root.left)
        + SumOfChildren(root.right)
        + SumEvenGrandparent(root.left)
        + SumEvenGrandparent(root.right);

    // If current node value is odd, just recurse without adding grandchildren
    return SumEvenGrandparent(root.left) + SumEvenGrandparent(root.right);
  }
}
