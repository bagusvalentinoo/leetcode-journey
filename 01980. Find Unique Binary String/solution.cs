/**
 * Problem: 1980. Find Unique Binary String
 *
 * Difficulty: Medium
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public string FindDifferentBinaryString(string[] nums)
  {
    // Get length of binary strings
    int length = nums.Length;

    // Array to build result string
    char[] result = new char[length];

    // Use Cantor's diagonal argument:
    // For each position i, take the opposite of nums[i][i]
    // This guarantees the result differs from every string in at least one position
    for (int i = 0; i < length; i++)
      // Flip the i-th character of i-th string
      result[i] = nums[i][i] == '1' ? '0' : '1';

    // Return constructed binary string
    return new string(result);
  }
}
