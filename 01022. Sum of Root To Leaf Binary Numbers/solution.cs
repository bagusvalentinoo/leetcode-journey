/**
 * Problem: 1022. Sum of Root To Leaf Binary Numbers
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public int SumRootToLeaf(TreeNode root)
  {
    // Start DFS from root with initial value 0
    return Dfs(root, 0);
  }

  private int Dfs(TreeNode node, int currentValue)
  {
    // Base case: null node contributes nothing
    if (node == null)
      return 0;

    // Shift current value left and add current node's bit
    int newValue = (currentValue << 1) | node.val;

    // If leaf node, return the complete binary number
    if (node.left == null && node.right == null)
      return newValue;

    // Recursively sum values from left and right subtrees
    return Dfs(node.left, newValue) + Dfs(node.right, newValue);
  }
}
