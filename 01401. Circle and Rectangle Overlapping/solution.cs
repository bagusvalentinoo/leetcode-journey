/**
 * Problem: 1401. Circle and Rectangle Overlapping
 *
 * Difficulty: Medium
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public bool CheckOverlap(int radius, int xCenter, int yCenter, int x1, int y1, int x2, int y2)
  {
    // Find the closest point on rectangle to circle center
    // Clamp circle center coordinates to rectangle boundaries
    int closestRectX = Math.Max(x1, Math.Min(xCenter, x2)),
      closestRectY = Math.Max(y1, Math.Min(yCenter, y2));

    // Calculate distance from circle center to the closest rectangle point
    double distanceToClosestPoint = Math.Sqrt(
        Math.Pow(xCenter - closestRectX, 2) + Math.Pow(yCenter - closestRectY, 2)
    );

    // Overlap occurs if distance is less than or equal to radius
    return distanceToClosestPoint <= radius;
  }
}
