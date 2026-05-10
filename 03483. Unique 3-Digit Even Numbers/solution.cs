/**
 * Problem: 3483. Unique 3-Digit Even Numbers
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public int TotalNumbers(int[] digits)
  {
    // Frequency array for digits 0-9
    int[] digitFrequency = new int[10];

    // Count occurrences of each digit
    for (int index = 0; index < digits.Length; index++)
      digitFrequency[digits[index]]++;

    // Counter for valid 3-digit even numbers
    int validCount = 0;

    // Iterate through possible last digits (units place) - must be even
    for (int lastDigit = 0; lastDigit < digitFrequency.Length; lastDigit++)
    {
      // Skip odd digits (number must be even)
      if (lastDigit % 2 == 1)
        continue;

      // Skip if digit not available
      if (digitFrequency[lastDigit] == 0)
        continue;

      // Use one occurrence of last digit
      digitFrequency[lastDigit]--;

      // Iterate through possible middle digits (tens place)
      for (int middleDigit = 0; middleDigit < digitFrequency.Length; middleDigit++)
      {
        // Skip if digit not available
        if (digitFrequency[middleDigit] == 0)
          continue;

        // Use one occurrence of middle digit
        digitFrequency[middleDigit]--;

        // Iterate through possible first digits (hundreds place) - cannot be zero
        for (int firstDigit = 1; firstDigit < digitFrequency.Length; firstDigit++)
        {
          // Count if first digit is available
          if (digitFrequency[firstDigit] > 0)
            validCount++;
        }

        // Restore middle digit
        digitFrequency[middleDigit]++;
      }

      // Restore last digit
      digitFrequency[lastDigit]++;
    }

    // Return total count of valid 3-digit even numbers
    return validCount;
  }
}
