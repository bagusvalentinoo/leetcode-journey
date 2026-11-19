/**
 * Problem: 2011. Final Value of Variable After Performing Operations
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public int FinalValueAfterOperations(string[] operations)
  {
    // Start X at its specified initial value
    int value = 0;

    // Adjust X according to each operation's middle character
    foreach (string operation in operations) value += operation[1] == '+' ? 1 : -1;

    // Return the final value of X
    return value;
  }
}
