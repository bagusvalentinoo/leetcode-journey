/**
 * Problem: 2022. Convert 1D Array Into 2D Array
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  vector<vector<int>> construct2DArray(vector<int> &original, int m, int n) {
    // Return empty array when total cells do not match input length
    if (m * n != original.size())
      return {};

    // Store constructed rows with m rows and n columns
    vector<vector<int>> answer(m, vector<int>(n));

    // Fill 2D array by mapping each flat index to row and column
    for (int i = 0; i < m * n; i++)
      answer[i / n][i % n] = original[i];

    // Return the constructed m x n 2D array
    return answer;
  }
};
