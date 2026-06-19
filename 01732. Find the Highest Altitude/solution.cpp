/**
 * Problem: 1732. Find the Highest Altitude
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution
{
public:
  int largestAltitude(vector<int> &gain)
  {
    // Initialize current altitude and maximum altitude
    int currentAltitude = 0,
        maxAltitude = 0;

    // Process each altitude change
    for (int change : gain)
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
};
