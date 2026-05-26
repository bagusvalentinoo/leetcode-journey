/**
 * Problem: 3258. Count Substrings That Satisfy K-Constraint I
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public int CountKConstraintSubstrings(string s, int k)
  {
    // Initialize sliding window pointers and counters
    int windowStart = 0,
        zeroCount = 0,
        oneCount = 0;

    // Counter for valid substrings
    int totalValidSubstrings = 0;

    // Length of the input string
    int stringLength = s.Length;

    // Expand window by moving right pointer
    for (int windowEnd = 0; windowEnd < stringLength; windowEnd++)
    {
      // If current character is '0', increment zero count
      if (s[windowEnd] == '0') zeroCount++;
      // Otherwise, current character is '1', increment one count
      else oneCount++;

      // Shrink window from left while both counts exceed k
      while (zeroCount > k && oneCount > k)
      {
        // If the character at left pointer is '0', decrement zero count
        if (s[windowStart] == '0') zeroCount--;
        // Otherwise, it must be '1', so decrement one count
        else oneCount--;

        // Move left pointer forward
        windowStart++;
      }

      // Add number of valid substrings ending at current right pointer
      totalValidSubstrings += windowEnd - windowStart + 1;
    }

    // Return the total count of valid substrings
    return totalValidSubstrings;
  }
}
