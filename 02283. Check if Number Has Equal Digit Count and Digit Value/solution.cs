/**
 * Problem: 2283. Check if Number Has Equal Digit Count and Digit Value
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public bool DigitCount(string num)
  {
    // Count occurrences of each digit from 0 to 9
    int[] counts = new int[10];

    // Record the frequency of every digit in the input string
    foreach (char digit in num) counts[digit - '0']++;

    // Compare each index's required count with its actual count
    for (int i = 0; i < num.Length; i++)
    {
      if (counts[i] != num[i] - '0') return false;
    }

    // Return true when every required count matches
    return true;
  }
}
