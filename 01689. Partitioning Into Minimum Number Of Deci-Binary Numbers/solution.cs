/**
 * Problem: 1689. Partitioning Into Minimum Number Of Deci-Binary Numbers
 *
 * Difficulty: Medium
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public int MinPartitions(string n)
  {
    // Check digits from 9 down to 1
    for (int digit = 9; digit > 0; digit--)
      // If current digit exists in the number, it's the maximum digit
      if (n.Contains(digit.ToString()))
        return digit;

    // If no digits 1-9 found, number consists of only zeros
    return 0;
  }
}
