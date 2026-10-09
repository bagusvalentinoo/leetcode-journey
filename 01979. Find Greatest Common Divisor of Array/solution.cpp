/**
 * Problem: 1979. Find Greatest Common Divisor of Array
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  int findGCD(vector<int> &nums) {
    // Initialize smallest and largest with the first element
    int smallest = nums[0], largest = nums[0];

    // Scan array to find minimum and maximum values
    for (int num : nums) {
      // Update smallest when a smaller value is found
      if (num < smallest)
        smallest = num;
      // Update largest when a larger value is found
      if (num > largest)
        largest = num;
    }

    // Return GCD of smallest and largest numbers
    return getGCD(smallest, largest);
  }

private:
  // Helper to compute GCD of two numbers using Euclidean algorithm
  int getGCD(int a, int b) {
    // Continue until remainder is zero
    while (b != 0) {
      // Store remainder of a divided by b
      int remainder = a % b;

      // Move b into a for the next iteration
      a = b;
      // Move remainder into b for the next iteration
      b = remainder;
    }

    // Return the computed GCD
    return a;
  }
};
