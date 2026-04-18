/**
 * Problem: 3852. Smallest Pair With Different Frequencies
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  vector<int> minDistinctFreqPair(vector<int> &nums) {
    // Frequency array for numbers 1-100 (index 0 unused)
    vector<int> frequency(101, 0);

    // Count occurrences of each number
    for (int num : nums)
      frequency[num]++;

    // Track first number found with frequency
    int firstNumber = -1;

    // Iterate through all possible numbers
    for (int i = 0; i < frequency.size(); i++) {
      // Check if number exists in array
      if (frequency[i] > 0) {
        // If we already found a first number, compare frequencies
        if (firstNumber != -1) {
          // If frequencies differ, return the pair
          if (frequency[firstNumber] != frequency[i])
            return {firstNumber, i};
        }
        // Otherwise, set as first number
        else
          firstNumber = i;
      }
    }

    // No valid pair found
    return {-1, -1};
  }
};
