/**
 * Problem: 1929. Concatenation of Array
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  vector<int> getConcatenation(vector<int> &nums) {
    // Store the length of the input array
    int n = nums.size();

    // Create result array with double the input length
    vector<int> answer(2 * n);

    // Copy each element into both halves of the result
    for (int i = 0; i < n; i++) {
      answer[i] = nums[i];
      answer[i + n] = nums[i];
    }

    // Return the concatenated array
    return answer;
  }
};
