/**
 * Problem: 3622. Check Divisibility by Digit Sum and Product
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  bool checkDivisibility(int n) {
    // Initialize sum of digits to 0
    int digitSum = 0;

    // Initialize product of digits to 1
    int digitProduct = 1;

    // Store original number for final modulo operation
    int originalNumber = n;

    // Extract each digit from the number
    while (n > 0) {
      // Add current digit to sum
      digitSum += n % 10;

      // Multiply current digit to product
      digitProduct *= n % 10;

      // Remove last digit from number
      n = n / 10;
    }

    // Return true if original number is divisible by (sum + product)
    return originalNumber % (digitSum + digitProduct) == 0;
  }
};
