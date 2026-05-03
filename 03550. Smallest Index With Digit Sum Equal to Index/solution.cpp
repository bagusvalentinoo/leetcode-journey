/**
 * Problem: 3550. Smallest Index With Digit Sum Equal to Index
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  int smallestIndex(vector<int> &nums) {
    // Helper function to calculate sum of digits
    auto digitSum = [](int number) -> int {
      // Initialize sum accumulator
      int sumOfDigits = 0;

      // Process each digit until number becomes 0
      while (number > 0) {
        // Add last digit to sum
        sumOfDigits += number % 10;
        // Remove last digit
        number = number / 10;
      }

      return sumOfDigits;
    };

    // Iterate through the array to find matching index
    for (int index = 0; index < nums.size(); index++) {
      // Check if current index equals digit sum of the element
      if (index == digitSum(nums[index]))
        return index;
    }

    // No matching index found
    return -1;
  }
};
