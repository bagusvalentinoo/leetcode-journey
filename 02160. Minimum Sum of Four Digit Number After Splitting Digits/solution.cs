/**
 * Problem: 2160. Minimum Sum of Four Digit Number After Splitting Digits
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public int MinimumSum(int n)
  {
    // Track the two smallest digits and the sum of all digits
    int smallestDigit = 9, secondSmallestDigit = 9, digitSum = 0;

    // Process each digit in the input number
    while (n > 0)
    {
      // Extract the current least significant digit
      int digit = n % 10;

      // Add the digit to the total sum
      digitSum += digit;

      // Update the two smallest digits when necessary
      if (digit < smallestDigit)
      {
        secondSmallestDigit = smallestDigit;
        smallestDigit = digit;
      }
      else if (digit < secondSmallestDigit)
        secondSmallestDigit = digit;

      // Remove the processed digit
      n /= 10;
    }

    // Return the minimum sum formed with the two smallest digits in the tens places
    return digitSum + smallestDigit * 9 + secondSmallestDigit * 9;
  }
}
