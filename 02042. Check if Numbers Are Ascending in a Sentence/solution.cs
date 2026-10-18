/**
 * Problem: 2042. Check if Numbers Are Ascending in a Sentence
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public bool AreNumbersAscending(string s)
  {
    // Track the most recent number in the sentence
    int previousNumber = 0;

    // Examine every space-separated token in order
    foreach (string token in s.Split(' '))
    {
      // Skip words because only number tokens affect the ordering
      if (token[0] < '0' || token[0] > '9') continue;

      // Convert the numeric token to an integer for comparison
      int currentNumber = int.Parse(token);

      // Reject a number that is not greater than its predecessor
      if (currentNumber <= previousNumber) return false;

      // Store the current number for the next comparison
      previousNumber = currentNumber;
    }

    // All numbers appeared in strictly increasing order
    return true;
  }
}
