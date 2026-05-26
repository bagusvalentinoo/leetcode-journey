/**
 * Problem: 3120. Count the Number of Special Characters I
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public int NumberOfSpecialChars(string word)
  {
    // Number of letters in the alphabet
    const int ALPHABET_SIZE = 26;

    // Code point for lowercase 'a' and uppercase 'A'
    int lowerA = 'a', upperA = 'A';

    // Bitmasks to track which lowercase and uppercase letters appear
    int lowerMask = 0, upperMask = 0;

    // Iterate through each character in the input string
    foreach (char currentChar in word)
    {
      // Get character code
      int charCode = currentChar;

      // If character is lowercase a-z, set its corresponding bit in lowerMask
      if (charCode >= lowerA && charCode < lowerA + ALPHABET_SIZE)
        lowerMask |= 1 << (charCode - lowerA);
      // If character is uppercase A-Z, set its corresponding bit in upperMask
      if (charCode >= upperA && charCode < upperA + ALPHABET_SIZE)
        upperMask |= 1 << (charCode - upperA);
    }

    // Bitwise AND gives common letters that appear in both cases
    int commonMask = lowerMask & upperMask;

    // Counter for number of set bits (common letters)
    int commonCount = 0;

    // Count set bits using Brian Kernighan's algorithm
    while (commonMask > 0)
    {
      // Clear the lowest set bit
      commonMask &= commonMask - 1;
      // Increment counter
      commonCount++;
    }

    // Return the count of characters appearing in both cases
    return commonCount;
  }
}
