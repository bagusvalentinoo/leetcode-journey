/**
 * Problem: 1779. Find Nearest Point That Has the Same X or Y Coordinate
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public int NearestValidPoint(int x, int y, int[][] points)
  {
    // Track smallest distance found and its index, default to no valid point
    int smallestDistance = int.MaxValue, answerIndex = -1;

    // Scan each point in order to keep smallest index on ties
    for (int i = 0; i < points.Length; i++)
    {
      // Read coordinates of current point
      int pointX = points[i][0], pointY = points[i][1];

      // Skip points sharing neither x nor y with current location
      if (pointX != x && pointY != y) continue;

      // Compute Manhattan distance to current location
      int distance = Math.Abs(pointX - x) + Math.Abs(pointY - y);

      // Update answer only on strictly smaller distance to keep first index on ties
      if (distance < smallestDistance)
      {
        smallestDistance = distance;
        answerIndex = i;
      }
    }

    // Return index of nearest valid point, or -1 when no valid point exists
    return answerIndex;
  }
}
