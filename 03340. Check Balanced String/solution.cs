/**
 * Problem: 3340. Check Balanced String
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public bool IsBalanced(string num)
  {
    // Initialize sums for even and odd indices
    int evenSum = 0,
      oddSum = 0;

    // Iterate through each character in the string
    for (int index = 0; index < num.Length; index++)
    {
      // Convert character to its numeric value
      int digit = num[index] - '0';

      // If index is even (using bitwise AND for performance)
      if ((index & 1) == 0)
        evenSum += digit;
      // If index is odd
      else
        oddSum += digit;
    }

    // Return true if sums are equal
    return evenSum == oddSum;
  }
}
