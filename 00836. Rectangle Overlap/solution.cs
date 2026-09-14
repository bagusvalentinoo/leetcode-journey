/**
 * Problem: 836. Rectangle Overlap
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public bool IsRectangleOverlap(int[] rec1, int[] rec2)
  {
    // Check horizontal projections overlap on the X-axis
    bool overlapX = rec1[0] < rec2[2] && rec2[0] < rec1[2];

    // Check vertical projections overlap on the Y-axis
    bool overlapY = rec1[1] < rec2[3] && rec2[1] < rec1[3];

    // Return true only when projections overlap on both axes
    return overlapX && overlapY;
  }
}
