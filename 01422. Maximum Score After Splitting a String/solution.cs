/**
 * Problem: 1422. Maximum Score After Splitting a String
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public int MaxScore(string s)
  {
    // Count total number of ones in the string
    int totalOnesCount = 0,
        leftZerosCount = 0,
        leftOnesCount = 0;

    // Variable to track the maximum score found
    int maximumScore = int.MinValue;

    // First pass: count total ones in the string
    foreach (char character in s)
    {
      // If character is '1', increment total ones counter
      if (character == '1') totalOnesCount++;
    }

    // Second pass: iterate through each possible split point (excluding last character)
    for (int i = 0; i < s.Length - 1; i++)
    {
      // If current character is '0', increment left zeros count
      if (s[i] == '0') leftZerosCount++;
      // If current character is '1', increment left ones count
      else leftOnesCount++;

      // Calculate score: zeros in left part + ones in right part
      int currentScore = leftZerosCount + (totalOnesCount - leftOnesCount);

      // Update maximum score if current is larger
      if (currentScore > maximumScore)
        maximumScore = currentScore;
    }

    // Return the maximum score found
    return maximumScore;
  }
}
