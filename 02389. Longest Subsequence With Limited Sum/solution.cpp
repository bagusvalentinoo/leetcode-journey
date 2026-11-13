/**
 * Problem: 2389. Longest Subsequence With Limited Sum
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  vector<int> answerQueries(vector<int> &nums, vector<int> &queries) {
    // Sort values so each shortest subsequence has the smallest possible sum
    sort(nums.begin(), nums.end());

    // Build prefix sums for every possible subsequence length
    vector<int> prefixSums(nums.size() + 1);

    // Append the sum of the smallest elements through each position
    for (int i = 0; i < nums.size(); i++)
      prefixSums[i + 1] = prefixSums[i] + nums[i];

    // Store the maximum valid length for every query
    vector<int> answer;

    // Process each sum limit independently
    for (int query : queries) {
      // Initialize the search with zero through all available elements
      int left = 0, right = nums.size();

      // Binary search for the final prefix sum within the limit
      while (left < right) {
        // Test the upper middle length to retain a valid candidate
        int middle = (left + right + 1) / 2;

        // Keep this length when its smallest possible sum fits the limit
        if (prefixSums[middle] <= query)
          left = middle;
        // Otherwise, search shorter subsequences
        else
          right = middle - 1;
      }

      // Record the number of selected elements
      answer.push_back(left);
    }

    // Return the maximum valid lengths
    return answer;
  }
};
