/**
 * Problem: 1401. Circle and Rectangle Overlapping
 *
 * Difficulty: Medium
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution
{
public:
  bool checkOverlap(int radius, int xCenter, int yCenter, int x1, int y1, int x2, int y2)
  {
    // Find the closest point on rectangle to circle center
    // Clamp circle center coordinates to rectangle boundaries
    int closestRectX = max(x1, min(xCenter, x2)),
        closestRectY = max(y1, min(yCenter, y2));

    // Calculate distance from circle center to the closest rectangle point
    double distanceToClosestPoint = sqrt(
        pow(xCenter - closestRectX, 2) + pow(yCenter - closestRectY, 2));

    // Overlap occurs if distance is less than or equal to radius
    return distanceToClosestPoint <= radius;
  }
};
