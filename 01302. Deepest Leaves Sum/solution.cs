/**
 * Problem: 1302. Deepest Leaves Sum
 *
 * Difficulty: Medium
 *
 * Language: C#
 *
 * Performance: Runtime - 1 ms (Beats 100%)
 */

public class Solution
{
  public void FindDeepestSum(TreeNode root, out int sum, out int depth)
  {
    // Base case: null node
    if (root == null)
    {
      sum = 0;
      depth = -1;
    }
    // Base case: leaf node
    else if (root.left == null && root.right == null)
    {
      sum = root.val;
      depth = 0;
    }
    else
    {
      // Recursively process left and right subtrees
      FindDeepestSum(root.left, out int leftSum, out int leftDepth);
      FindDeepestSum(root.right, out int rightSum, out int rightDepth);

      // Compare depths from both subtrees
      if (leftDepth == rightDepth)
      {
        // Equal depths: sum both and increase depth
        depth = leftDepth + 1;
        sum = leftSum + rightSum;
      }
      else if (leftDepth > rightDepth)
      {
        // Left subtree deeper: take left sum
        depth = leftDepth + 1;
        sum = leftSum;
      }
      else
      {
        // Right subtree deeper: take right sum
        depth = rightDepth + 1;
        sum = rightSum;
      }
    }
  }

  public int DeepestLeavesSum(TreeNode root)
  {
    // Call helper method to find deepest level sum
    FindDeepestSum(root, out int resultSum, out int _);

    return resultSum;
  }
}
