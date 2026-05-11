/**
 * Problem: 2553. Separate the Digits in an Array
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  vector<int> separateDigits(vector<int> &nums) {
    // Initialize result array
    vector<int> result;

    // Iterate through each number
    for (int num : nums) {
      // Convert number to string
      string numStr = to_string(num);

      // Add each digit to result
      for (char ch : numStr)
        result.push_back(ch - '0');
    }

    // Return result array
    return result;
  }
};
