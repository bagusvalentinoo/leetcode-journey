/**
 * Problem: 1442. Count Triplets That Can Form Two Arrays of Equal XOR
 *
 * Difficulty: Medium
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public int CountTriplets(int[] arr)
  {
    // Current prefix XOR value
    int currentXor = 0;
    // Total count of valid triplets
    int tripletCount = 0;

    // Dictionary to store frequency and sum of indices of each XOR value
    Dictionary<int, int> xorFrequency = new Dictionary<int, int>(),
      xorIndexSum = new Dictionary<int, int>();

    // Initialize with XOR 0 at index 0 (before any elements)
    xorFrequency[0] = 1;
    xorIndexSum[0] = 0;

    // Iterate through each element in the array
    for (int i = 0; i < arr.Length; i++)
    {
      // Update current prefix XOR
      currentXor ^= arr[i];

      // Get frequency and index sum for current XOR value
      int frequency = xorFrequency.ContainsKey(currentXor) ? xorFrequency[currentXor] : 0,
        indexSum = xorIndexSum.ContainsKey(currentXor) ? xorIndexSum[currentXor] : 0;

      // Add number of triplets ending at current position
      // Formula: frequency * i - sum of indices
      tripletCount += frequency * i - indexSum;

      // Update frequency and index sum for current XOR value
      xorFrequency[currentXor] = frequency + 1;
      xorIndexSum[currentXor] = indexSum + i + 1;
    }

    // Return the total number of valid triplets found
    return tripletCount;
  }
}
