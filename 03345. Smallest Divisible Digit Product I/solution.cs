/**
 * Problem: 3345. Smallest Divisible Digit Product I
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public int SmallestNumber(int n, int t)
  {
    // Continuously check numbers starting from n
    while (true)
    {
      // If current number's digit product is divisible by t, return it
      if (IsProductDivisible(n, t))
        return n;

      // Move to the next number
      n++;
    }
  }

  // Helper method to check if product of digits is divisible by t
  private static bool IsProductDivisible(int number, int t)
  {
    // Initialize product to 1 (multiplicative identity)
    int digitProduct = 1;

    // Extract and multiply each digit
    while (number > 0)
    {
      // Get the last digit
      int currentDigit = number % 10;

      // Multiply digit to product
      digitProduct *= currentDigit;
      // Remove the last digit
      number /= 10;
    }

    // Return true if product is divisible by t
    return digitProduct % t == 0;
  }
}
