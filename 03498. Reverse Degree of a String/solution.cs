/**
 * Problem: 3498. Reverse Degree of a String
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public int ReverseDegree(string s)
  {
    // Initialize sum accumulator to store the total reverse degree
    int totalSum = 0;

    // Iterate through each character in the input string
    for (int index = 0; index < s.Length; index++)
    {
      // Calculate reverse alphabet position (a=26, b=25, ..., z=1)
      int reversePosition = 123 - s[index];

      // Add to total: reversePosition multiplied by 1-indexed position
      totalSum += reversePosition * (index + 1);
    }

    // Return the calculated reverse degree sum
    return totalSum;
  }
}
