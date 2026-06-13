/**
 * Problem: 1446. Consecutive Characters
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution
{
public:
  int maxPower(string s)
  {
    // Convert string to character array (string can be indexed directly in C++)
    // Initialize maximum power to at least 1 (single character)
    int maxConsecutive = 1;

    // Iterate through each character in the string
    for (int i = 0; i < s.length(); i++)
    {
      // Counter for current consecutive sequence length
      int currentStreak = 1;

      // Count consecutive identical characters starting at position i
      while (i < s.length() - 1 && s[i] == s[i + 1])
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
};
