/**
 * Problem: 2243. Calculate Digit Sum of a String
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public string DigitSum(string s, int k)
  {
    // Continue until the string fits in one group
    while (s.Length > k)
    {
      // Build the string produced by the current round
      StringBuilder nextString = new StringBuilder();

      // Process each consecutive group of at most k digits
      for (int start = 0; start < s.Length; start += k)
      {
        // Store the sum of digits in the current group
        int groupSum = 0;

        // Add every digit in the current group
        for (int index = start; index < Math.Min(start + k, s.Length); index++) groupSum += s[index] - '0';

        // Append the group's digit sum
        nextString.Append(groupSum);
      }

      // Use this round's result for the next round
      s = nextString.ToString();
    }

    // Return the string after all rounds
    return s;
  }
}
