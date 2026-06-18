/**
 * Problem: 1344. Angle Between Hands of a Clock
 *
 * Difficulty: Medium
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public double AngleClock(int hour, int minutes)
  {
    // Calculate the exact hour hand position (including minutes)
    double hourHandPosition = hour + minutes / 60.0;

    // Calculate the difference in "hour units" between hour and minute hands
    // Minute hand moves 12x faster than hour hand
    double hourDifference = (11 * hourHandPosition) % 12;

    // Convert to degrees: each hour unit = 30 degrees
    return Math.Min(hourDifference, 12 - hourDifference) * 30;
  }
}
