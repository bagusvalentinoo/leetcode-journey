/**
 * Problem: 1446. Consecutive Characters
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public int MaxPower(string s)
  {
    // Convert string to character array
    char[] characters = s.ToCharArray();

    // Initialize maximum power to at least 1 (single character)
    int maxConsecutive = 1;

    // Iterate through each character in the array
    for (int i = 0; i < characters.Length; i++)
    {
      // Counter for current consecutive sequence length
      int currentStreak = 1;

      // Count consecutive identical characters starting at position i
      while (i < characters.Length - 1 && characters[i] == characters[i + 1])
      {
        // Increment streak counter
        currentStreak++;
        // Move to next character
        i++;
      }

      // Update maximum if current streak is larger
      if (currentStreak > maxConsecutive)
        maxConsecutive = currentStreak;
    }

    // Return the maximum consecutive length found
    return maxConsecutive;
  }
}
