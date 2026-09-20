/**
 * Problem: 1748. Sum of Unique Elements
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  int sumOfUnique(vector<int> &nums) {
    // Initialize frequency array for values 0 to 100
    vector<int> frequency(101, 0);

    // Count occurrences of each number
    for (int num : nums)
      frequency[num]++;

    // Store sum of unique elements
    int answer = 0;

    // Add values that appear exactly once
    for (int num = 1; num <= 100; num++) {
      // Check if current value is unique
      if (frequency[num] == 1)
        answer += num;
    }

    // Return the sum of all unique elements
    return answer;
  }
};
