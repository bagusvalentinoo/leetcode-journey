/**
 * Problem: 1305. All Elements in Two Binary Search Trees
 *
 * Difficulty: Medium
 *
 * Language: C#
 *
 * Performance: Runtime - 5 ms (Beats 100%)
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
  public IList<int> GetAllElements(TreeNode root1, TreeNode root2)
  {
    // Create list to store values from first tree
    List<int> list1 = new List<int>();

    // Perform in-order traversal on first tree
    InOrderTraversal(root1, list1);

    // Create list to store values from second tree
    List<int> list2 = new List<int>();

    // Perform in-order traversal on second tree
    InOrderTraversal(root2, list2);

    // Create array to store merged values
    int[] result = new int[list1.Count + list2.Count];

    // Pointers for both lists and the result array
    int pointer1 = 0,
      pointer2 = 0,
      resultPointer = 0;

    // Merge while both lists have elements
    while (pointer1 < list1.Count && pointer2 < list2.Count)
    {
      // If the second value is null or the first value is smaller
      if (list1[pointer1] < list2[pointer2])
        result[resultPointer++] = list1[pointer1++];
      // Otherwise, add the second value to the result
      else
        result[resultPointer++] = list2[pointer2++];
    }

    // Add remaining elements from list1
    while (pointer1 < list1.Count)
      result[resultPointer++] = list1[pointer1++];

    // Add remaining elements from list2
    while (pointer2 < list2.Count)
      result[resultPointer++] = list2[pointer2++];

    // Return the merged array
    return result;
  }

  private void InOrderTraversal(TreeNode node, List<int> list)
  {
    // If the node is null, return
    if (node == null)
      return;

    // Traverse left subtree
    InOrderTraversal(node.left, list);

    // Visit current node
    list.Add(node.val);

    // Traverse right subtree
    InOrderTraversal(node.right, list);
  }
}
