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
    // Array to track visited indices to avoid infinite loops
    var visited = new bool[arr.Length];

    // Start DFS from the given index
    return Dfs(start);

    // Recursive DFS function to explore possible jumps
    bool Dfs(int currentIndex)
    {
      // If index is out of bounds or already visited, cannot proceed
      if (currentIndex < 0 || currentIndex >= arr.Length || visited[currentIndex])
        return false;
      // If current position has value 0, we've reached the target
      if (arr[currentIndex] == 0)
        return true;

      // Mark current index as visited to avoid revisiting
      visited[currentIndex] = true;

      // Try jumping forward by the value at current index
      // OR jumping backward by the value at current index
      return Dfs(currentIndex + arr[currentIndex]) || Dfs(currentIndex - arr[currentIndex]);
    }
  }
}
