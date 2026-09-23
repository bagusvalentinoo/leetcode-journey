/**
 * Problem: 1805. Number of Different Integers in a String
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public int NumDifferentIntegers(string word)
  {
    // Track distinct integers using hash set
    HashSet<string> seen = new HashSet<string>();

    // Scan word for digit blocks
    for (int i = 0; i < word.Length;)
    {
      // Skip non-digit characters
      do
      {
        // Convert current character to digit value
        int temp = word[i] - '0';

        // Stop when current character is a digit
        if (temp >= 0 & temp <= 9)
          break;
      } while (++i < word.Length);

      // Stop when end of string is reached
      if (i >= word.Length)
        break;

      // Mark start of digit block
      int start = i;

      // Consume consecutive digits
      do
      {
        // Convert current character to digit value
        int temp = word[i] - '0';

        // Stop when current character is not a digit
        if (temp < 0 | temp > 9)
          break;
      } while (++i < word.Length);

      // Strip leading zeros keeping at least one digit
      do
      {
        // Convert start character to digit value
        int temp = word[start] - '0';

        // Stop when start character is not zero
        if (temp != 0)
          break;
      } while (++start < i);

      // Mark normalized number as seen handling all-zero block
      if (start == i)
        seen.Add("0");
      else
        seen.Add(word[start..i].ToString());
    }

    // Return the count of distinct integers
    return seen.Count;
  }
}
