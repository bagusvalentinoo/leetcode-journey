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
    // Frequency table for digits 0-9
    Span<int> digitFrequency = stackalloc int[10];

    // Count occurrences of each digit
    for (int index = 0; index < digits.Length; index++)
      digitFrequency[digits[index]]++;

    // Counters for distinct digits meeting frequency thresholds
    int countAtLeastOne = 0, countAtLeastOneNonZero = 0;
    int countAtLeastTwo = 0, countAtLeastTwoNonZero = 0;

    // Tally how many digits appear at least once and at least twice
    for (int digit = 0; digit < 10; digit++)
    {
      // Read frequency of current digit
      int frequency = digitFrequency[digit];

      // Increment threshold counters when met
      countAtLeastOne += frequency >= 1 ? 1 : 0;
      countAtLeastTwo += frequency >= 2 ? 1 : 0;
    }

    // Read frequency of zero for non-zero adjustments
    int zeroFrequency = digitFrequency[0];

    // Exclude zero from non-zero distinct counters
    countAtLeastOneNonZero = Math.Max(0, countAtLeastOne - (zeroFrequency >= 1 ? 1 : 0));
    countAtLeastTwoNonZero = Math.Max(0, countAtLeastTwo - (zeroFrequency >= 2 ? 1 : 0));

    // Counter for valid 3-digit even numbers
    int validCount = 0;

    // Count numbers with zero in the units place
    if (zeroFrequency > 0)
    {
      // Read frequency of zero used as last digit
      int frequency = zeroFrequency;

      // Count pattern xff where first digit equals zero
      validCount += (frequency >= 2 ? 1 : 0) * countAtLeastOneNonZero;

      // Count pattern xxf where first two digits are equal
      validCount += countAtLeastTwoNonZero;

      // Count pattern xyf where first two digits differ and are non-zero
      validCount += Math.Max(0, (countAtLeastOneNonZero - 1) * countAtLeastOneNonZero);
    }

    // Count numbers with a non-zero even digit in the units place
    for (int digit = 2; digit < 10; digit += 2)
    {
      // Read frequency of current even last digit
      int frequency = digitFrequency[digit];

      // Skip if digit not available
      if (frequency < 1)
        continue;

      // Count pattern fff where all three digits are equal
      validCount += frequency >= 3 ? 1 : 0;

      // Count patterns fxf and xff where exactly two digits equal the last digit
      validCount += (frequency >= 2 ? 1 : 0) * ((countAtLeastOne - 1) + (countAtLeastOneNonZero - 1));

      // Count pattern xxf where first two digits are equal but differ from last digit
      validCount += countAtLeastTwoNonZero - (frequency >= 2 ? 1 : 0);

      // Count pattern xyf where first digit is non-zero and all digits differ
      validCount += Math.Max(0, (countAtLeastOne - 2) * (countAtLeastOneNonZero - 1));
    }

    // Return total count of valid 3-digit even numbers
    return validCount;
  }
}
