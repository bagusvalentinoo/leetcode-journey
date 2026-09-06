/**
 * Problem: 1608. Special Array With X Elements Greater Than or Equal X
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  int specialArray(vector<int> &nums) {
    // Cache array length as upper bound for candidate x
    int arrayLength = nums.size();

    // Try every candidate x from 1 to n
    for (int candidate = 1; candidate <= arrayLength; candidate++) {
      // Count numbers greater than or equal to candidate
      int count = 0;

      // Scan array and count qualifying elements
      for (int currentNumber : nums) {
        // Increment count when element meets threshold
        if (currentNumber >= candidate)
          count++;
      }

      // Return candidate when count matches exactly
      if (count == candidate)
        return candidate;
    }

    // No candidate matched so array is not special
    return -1;
  }
};
