/**
 * Problem: 3300. Minimum Element After Replacement With Digit Sum
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  int minElement(vector<int> &nums) {
    // Initialize answer to maximum value to track minimum digit sum
    int minimumDigitSum = INT_MAX;

    // Iterate through each number in the array
    for (int currentNumber : nums) {
      // Calculate sum of digits for current number
      int digitSumOfNumber = 0;
      int temp = currentNumber;

      // Extract each digit and sum them
      while (temp > 0) {
        digitSumOfNumber += temp % 10;
        temp /= 10;
      }

      // Update minimum digit sum if current digit sum is smaller
      if (digitSumOfNumber < minimumDigitSum)
        minimumDigitSum = digitSumOfNumber;
    }

    // Return the smallest digit sum found
    return minimumDigitSum;
  }
};
