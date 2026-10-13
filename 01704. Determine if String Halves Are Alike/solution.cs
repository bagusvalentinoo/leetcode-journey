/**
 * Problem: 1704. Determine if String Halves Are Alike
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public bool HalvesAreAlike(string s)
  {
    // Define vowel set for O(1) lookup including uppercase variants
    HashSet<char> vowels = new HashSet<char> { 'a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U' };

    // Calculate half length as split point between halves
    int half = s.Length / 2;

    // Track vowel count difference between first and second half
    int vowelDifference = 0;

    // Compare vowels at mirrored positions in both halves
    for (int i = 0; i < half; i++)
    {
      // Increment difference when first-half character is a vowel
      if (vowels.Contains(s[i])) vowelDifference++;
      // Decrement difference when second-half character is a vowel
      if (vowels.Contains(s[half + i])) vowelDifference--;
    }

    // Return true when vowel counts balance to zero
    return vowelDifference == 0;
  }
}
