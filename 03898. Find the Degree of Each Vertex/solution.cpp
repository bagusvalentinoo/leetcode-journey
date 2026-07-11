/**
 * Problem: 3898. Find the Degree of Each Vertex
 *
 * Difficulty: Easy
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution
{
public:
  vector<int> findDegrees(vector<vector<int>> &matrix)
  {
    // Initialize vector to store row sums
    vector<int> rowSums;

    // Iterate through each row in the matrix
    for (int i = 0; i < matrix.size(); i++)
    {
      // Initialize sum for current row
      int currentRowSum = 0;

      // Iterate through each element in the current row
      for (int j = 0; j < matrix[i].size(); j++)
        // Add current element to row sum
        currentRowSum += matrix[i][j];

      // Push row sum to result vector
      rowSums.push_back(currentRowSum);
    }

    // Return vector of row sums
    return rowSums;
  }
};
