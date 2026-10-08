/**
 * Problem: 1974. Minimum Time to Type Word Using Special Typewriter
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public int MinTimeToType(string word)
  {
    // Track total seconds spent moving and typing
    int total = 0;

    // Track previous character position starting at 'a'
    int prev = 0;

    // Process each character
    foreach (char ch in word)
    {
      // Convert current character to alphabet index
      int curr = ch - 'a';

      // Compute clockwise distance between positions
      int diff = Math.Abs(curr - prev);

      // Take shorter of clockwise and counterclockwise moves
      int move = Math.Min(diff, 26 - diff);

      // Add move cost plus one second to type the character
      total += move + 1;

      // Update previous position to current character
      prev = curr;
    }

    // Return the minimum seconds to type the word
    return total;
  }
}
