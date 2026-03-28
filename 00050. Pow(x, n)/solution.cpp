/**
 * Problem: 50. Pow(x, n)
 *
 * Difficulty: Medium
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  double myPow(double x, int n) {
    // Base case: any number to power 0 is 1
    if (n == 0)
      return 1;

    // Handle negative exponent by taking reciprocal
    if (n < 0) {
      // Convert x to its reciprocal
      x = 1 / x;
      // Make exponent positive (use long to avoid overflow with INT_MIN)
      long exp = -(long)n;

      // Return result of positive exponent
      return myPowPositive(x, exp);
    }

    // Return result of positive exponent
    return myPowPositive(x, n);
  }

private:
  // Helper function for positive exponents
  double myPowPositive(double x, long n) {
    // Base case: any number to power 0 is 1
    if (n == 0)
      return 1;

    // Recursively calculate half power
    double half = myPowPositive(x, n / 2);

    // If n is even: result = half^2
    // If n is odd: result = half^2 * x
    return n % 2 == 0 ? half * half : half * half * x;
  }
};
