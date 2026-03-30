/**
 * Problem: 2840. Check if Strings Can be Made Equal With Operations II
 *
 * Difficulty: Medium
 *
 * Language: C#
 *
 * Performance: Runtime - 2 ms (Beats 100%)
 */

public class Solution
{
  public bool CheckStrings(string s1, string s2)
  {
    // Track XOR and sum differences for even and odd indices
    int evenXor = 0,
      oddXor = 0,
      evenSumDiff = 0,
      oddSumDiff = 0;

    // Iterate through each character in the strings
    for (int i = 0; i < s1.Length; i++)
    {
      // Get character codes for both strings at current index
      int charCode1 = (int)s1[i],
        charCode2 = (int)s2[i];

      // Calculate XOR difference and squared difference
      int xorDiff = charCode1 ^ charCode2,
        squareDiff = charCode1 * charCode1 - charCode2 * charCode2;

      // Check if current index is odd
      if ((i & 1) == 1)
      {
        // Update XOR for odd indices
        oddXor ^= xorDiff;
        // Update sum of squares for odd indices
        oddSumDiff += squareDiff;
      }
      // Current index is even
      else
      {
        // Update XOR for even indices
        evenXor ^= xorDiff;
        // Update sum of squares for even indices
        evenSumDiff += squareDiff;
      }
    }

    // Return true only if all differences are zero
    return (evenXor | oddXor | evenSumDiff | oddSumDiff) == 0;
  }
}
