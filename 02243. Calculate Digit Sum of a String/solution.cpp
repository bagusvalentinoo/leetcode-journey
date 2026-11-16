/**
 * Problem: 2243. Calculate Digit Sum of a String
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  string digitSum(string s, int k) {
    // Continue until the string fits in one group
    while (s.length() > k) {
      // Build the string produced by the current round
      string nextString;

      // Process each consecutive group of at most k digits
      for (int start = 0; start < s.length(); start += k) {
        // Store the sum of digits in the current group
        int groupSum = 0;

        // Add every digit in the current group
        for (int index = start; index < min(start + k, static_cast<int>(s.length())); index++)
          groupSum += s[index] - '0';

        // Append the group's digit sum
        nextString += to_string(groupSum);
      }

      // Use this round's result for the next round
      s = nextString;
    }

    // Return the string after all rounds
    return s;
  }
};
