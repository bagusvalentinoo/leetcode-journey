/**
 * Problem: 3861. Minimum Capacity Box
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public int MinimumIndex(int[] capacity, int itemSize)
  {
    // Initialize answer as -1 (not found)
    int answerIndex = -1;
    // Track the smallest valid capacity found so far (start with max possible 101)
    int smallestValidCapacity = 101;

    // Iterate through each capacity
    for (int i = 0; i < capacity.Length; i++)
    {
      // Check if current capacity meets or exceeds itemSize and is smaller than current minimum
      if (capacity[i] >= itemSize && capacity[i] < smallestValidCapacity)
      {
        // Update answer index to current position
        answerIndex = i;
        // Update smallest valid capacity found
        smallestValidCapacity = capacity[i];
      }
    }

    // Return the index of the smallest valid capacity, or -1 if none found
    return answerIndex;
  }
}
