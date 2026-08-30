/**
 * Problem: 1528. Shuffle String
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public string RestoreString(string s, int[] indices)
  {
    // Initialize char array with the same length as the input string
    char[] result = new char[s.Length];

    // Place each character at its target position
    for (int i = 0; i < s.Length; i++)
      // Character at index i moves to position indices[i]
      result[indices[i]] = s[i];

    // Return the restored string built from the char array
    return new string(result);
  }
}
