/**
 * Problem: 1496. Path Crossing
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public bool IsPathCrossing(string path)
  {
    // Track visited positions using hash set
    HashSet<string> visited = new HashSet<string>();

    // Start at origin
    int x = 0, y = 0;

    // Add origin to visited set
    visited.Add($"{x}_{y}");

    // Process each direction
    foreach (char dir in path)
    {
      // Update position based on direction
      switch (dir)
      {
        // Move north: increment y coordinate
        case 'N':
          y++;
          break;

        // Move south: decrement y coordinate
        case 'S':
          y--;
          break;

        // Move west: decrement x coordinate
        case 'W':
          x--;
          break;

        // Move east: increment x coordinate
        case 'E':
          x++;
          break;
      }

      // Check if position already visited, mark as visited
      if (!visited.Add($"{x}_{y}")) return true;
    }

    // Path doesn't cross itself
    return false;
  }
}
