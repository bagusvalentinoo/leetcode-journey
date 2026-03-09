/**
 * Problem: 1310. XOR Queries of a Subarray
 *
 * Difficulty: Medium
 *
 * Language: C#
 *
 * Performance: Runtime - 3 ms (Beats 100%)
 */

public class Solution
{
  public int[] XorQueries(int[] arr, int[][] queries)
  {
    // Get array length
    int arrayLength = arr.Length;
    // Build prefix XOR array with extra element at start
    int[] prefixXors = new int[arrayLength + 1];

    // Compute prefix XOR where prefixXors[i] = XOR of arr[0..i-1]
    for (int i = 0; i < arrayLength; i++)
      prefixXors[i + 1] = prefixXors[i] ^ arr[i];

    // Process each query
    int[] results = new int[queries.Length];

    // XOR from left to right = prefix[right+1] ^ prefix[left]
    for (int i = 0; i < queries.Length; i++)
    {
      // Get left and right from query
      int left = queries[i][0],
        right = queries[i][1];

      // XOR from left to right = prefix[right+1] ^ prefix[left]
      results[i] = prefixXors[right + 1] ^ prefixXors[left];
    }

    // Return results
    return results;
  }
}
