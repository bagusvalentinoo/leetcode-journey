/**
 * Problem: 1512. Number of Good Pairs
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public int NumIdenticalPairs(int[] nums)
  {
    // Dictionary to store frequency of each number
    Dictionary<int, int> frequencyMap = new Dictionary<int, int>();

    // Counter for identical pairs
    int pairsCount = 0;

    // Iterate through each element in the array
    foreach (int currentNumber in nums)
    {
      // Get current frequency of this number (default to 0)
      int currentFrequency = frequencyMap.GetValueOrDefault(currentNumber, 0);

      // Add current frequency to pair count (pairs with previous occurrences)
      pairsCount += currentFrequency;
      // Update frequency map with incremented count
      frequencyMap[currentNumber] = currentFrequency + 1;
    }

    // Return the total number of identical pairs found in the array
    return pairsCount;
  }
}
