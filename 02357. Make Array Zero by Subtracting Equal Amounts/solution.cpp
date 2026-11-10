/**
 * Problem: 2357. Make Array Zero by Subtracting Equal Amounts
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  int minimumOperations(vector<int> &nums) {
    // Store each distinct positive value because each requires one operation
    unordered_set<int> positiveValues;

    // Add each positive number to the set
    for (int number : nums) {
      if (number > 0) positiveValues.insert(number);
    }

    // Return the number of distinct positive values
    return positiveValues.size();
  }
};
