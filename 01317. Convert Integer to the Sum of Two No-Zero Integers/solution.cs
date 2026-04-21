/**
 * Problem: 1317. Convert Integer to the Sum of Two No-Zero Integers
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public int[] GetNoZeroIntegers(int n)
  {
    // Iterate through all possible values for the first integer, starting from 1 up to n
    for (int firstInt = 1; firstInt <= n; firstInt++)
    {
      // Calculate the second integer so that their sum equals n
      int secondInt = n - firstInt;

      // Check if both integers do not contain the digit '0'
      if (!firstInt.ToString().Contains('0') && !secondInt.ToString().Contains('0'))
        // If both integers are valid, return them as an array
        return new int[] { firstInt, secondInt };
    }

    // Fallback return (should not reach here as per problem constraints)
    return new int[] { -1, -1 };
  }
}
