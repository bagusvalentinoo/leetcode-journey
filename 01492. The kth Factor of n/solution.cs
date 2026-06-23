/**
 * Problem: 1492. The kth Factor of n
 *
 * Difficulty: Medium
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public int KthFactor(int n, int k)
  {
    // Counter for factors found
    int factorCount = 0;

    // Iterate through all possible factors from 1 to n
    for (int i = 1; i <= n; i++)
    {
      // Check if i is a factor of n
      if (n % i == 0)
      {
        // Increment factor counter
        factorCount++;

        // If we've found the k-th factor, return it
        if (factorCount == k) return i;
      }
    }

    // Return -1 if k exceeds the total number of factors
    return -1;
  }
}
