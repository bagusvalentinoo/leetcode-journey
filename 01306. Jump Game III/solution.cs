/**
 * Problem: 1306. Jump Game III
 *
 * Difficulty: Medium
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public bool CanReach(int[] arr, int start)
  {
    // Depth-first search to explore possible jumps
    return Dfs(arr, start);
  }

  private bool Dfs(int[] arr, int index)
  {
    // Stop if index out of bounds or already visited
    if (index < 0 || index >= arr.Length || arr[index] == -1)
      return false;
    // Return true if current value is zero
    if (arr[index] == 0)
      return true;

    // Get the jump value
    int jumpValue = arr[index];

    // Mark current index as visited (using -1 to indicate visited)
    arr[index] = -1;

    // Try jumping left and right
    return Dfs(arr, index - jumpValue) || Dfs(arr, index + jumpValue);
  }
}
