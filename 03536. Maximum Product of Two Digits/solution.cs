/**
 * Problem: 3536. Maximum Product of Two Digits
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public int MaxProduct(int n)
  {
    // Initialize two largest digit trackers
    int largestDigit = 0,
      secondLargestDigit = 0;

    // Process each digit of the number
    while (n > 0)
    {
      // Extract the last digit
      int currentDigit = n % 10;

      // Update largest and second largest digits
      if (currentDigit > largestDigit)
      {
        secondLargestDigit = largestDigit;
        largestDigit = currentDigit;
      }
      // Update only second largest if current digit is between them
      else if (currentDigit > secondLargestDigit)
        secondLargestDigit = currentDigit;

      // Remove the last digit
      n = n / 10;
    }

    // Return product of the two largest digits
    return largestDigit * secondLargestDigit;
  }
}
