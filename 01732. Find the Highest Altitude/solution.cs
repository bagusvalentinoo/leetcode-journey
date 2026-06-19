/**
 * Problem: 1732. Find the Highest Altitude
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public int LargestAltitude(int[] gain)
  {
    // Initialize current altitude and maximum altitude
    int currentAltitude = 0,
        maxAltitude = 0;

    // Process each altitude change
    foreach (int change in gain)
    {
      // Update current altitude
      currentAltitude += change;

      // Update maximum altitude if current is higher
      if (currentAltitude > maxAltitude)
        maxAltitude = currentAltitude;
    }

    // Return the highest altitude reached during the journey
    return maxAltitude;
  }
}
