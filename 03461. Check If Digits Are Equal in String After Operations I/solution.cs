/**
 * Problem: 3461. Check If Digits Are Equal in String After Operations I
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public bool HasSameDigits(string s)
  {
    // Get the length of the input string
    int currentLength = s.Length;

    // Create an array to store numeric digits
    int[] digitArray = new int[currentLength];

    // Convert each character to its numeric value
    for (int i = 0; i < currentLength; i++)
      digitArray[i] = s[i] - '0';

    // Continue reducing until only two digits remain
    while (currentLength > 2)
    {
      // Update each element with sum of adjacent digits modulo 10
      for (int i = 0; i < currentLength - 1; i++)
        digitArray[i] = (digitArray[i] + digitArray[i + 1]) % 10;

      // Decrease the length after each iteration
      currentLength--;
    }

    // Return true if the final two digits are equal
    return digitArray[0] == digitArray[1];
  }
}
