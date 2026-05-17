/**
 * Problem: 3345. Smallest Divisible Digit Product I
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  int smallestNumber(int n, int t) {
    // If t is 0 or 1, any number's digit product is divisible by t
    if (t == 0 || t == 1)
      return n;

    // Iterate through numbers starting from n
    for (int i = n;; i++) {
      // Create a copy of current number to process digits
      int currentNumber = i;
      // Initialize product of digits to 1 (multiplicative identity)
      int digitProduct = 1;

      // Extract and multiply each digit
      while (currentNumber > 0) {
        // Get the last digit
        int lastDigit = currentNumber % 10;

        // Multiply digit to product
        digitProduct *= lastDigit;
        // Remove the last digit
        currentNumber = currentNumber / 10;
      }

      // If product is divisible by t, return current number
      if (digitProduct % t == 0)
        return i;
    }
  }
};
