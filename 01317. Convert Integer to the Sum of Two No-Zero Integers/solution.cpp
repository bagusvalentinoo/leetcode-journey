/**
 * Problem: 1317. Convert Integer to the Sum of Two No-Zero Integers
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  vector<int> getNoZeroIntegers(int n) {
    // Iterate through all possible values for the first integer, starting from
    // 1 up to n
    for (int firstInt = 1; firstInt <= n; firstInt++) {
      // Calculate the second integer so that their sum equals n
      int secondInt = n - firstInt;

      // Helper lambda to check if a number contains zero
      auto containsZero = [](int num) {
        string s = to_string(num);
        return s.find('0') != string::npos;
      };

      // Check if both integers do not contain the digit '0'
      if (!containsZero(firstInt) && !containsZero(secondInt))
        // If both integers are valid, return them as a vector
        return {firstInt, secondInt};
    }

    // Fallback return (should not reach here as per problem constraints)
    return {};
  }
};
