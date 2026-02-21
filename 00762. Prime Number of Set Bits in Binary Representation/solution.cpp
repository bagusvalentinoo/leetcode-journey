/**
 * Problem: 762. Prime Number of Set Bits in Binary Representation
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  // Helper function to check if a number is prime
  bool isPrime(int n) {
    // 1 is not prime
    if (n == 1)
      return false;

    // Check divisibility up to square root
    for (int i = 2; i <= sqrt(n); i++) {
      // If n is divisible by i
      if (n % i == 0)
        return false;
    }

    // Return true if n is prime
    return true;
  }

  int countPrimeSetBits(int left, int right) {
    // Initialize result to 0
    int result = 0;

    // Iterate through each number in the range
    for (int i = left; i <= right; i++) {
      // __builtin_popcount counts set bits in GCC/Clang
      // Check if number of set bits is prime
      if (isPrime(__builtin_popcount(i))) {
        // Increment result
        result++;
      }
    }

    // Return result
    return result;
  }
};
