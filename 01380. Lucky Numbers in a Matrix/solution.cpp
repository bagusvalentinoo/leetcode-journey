/**
 * Problem: 1380. Lucky Numbers in a Matrix
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
  vector<int> luckyNumbers(vector<vector<int>> &matrix)
  {
    // Vector to store lucky numbers found
    vector<int> luckyNumbersList;

    // Iterate through each row in the matrix
    for (const auto &currentRow : matrix)
    {
      // Find the minimum value in the current row
      int rowMinimum = *min_element(currentRow.begin(), currentRow.end());
      // Find the column index where the minimum value is located
      int minColumnIndex = distance(currentRow.begin(), find(currentRow.begin(), currentRow.end(), rowMinimum));

      // Flag to track if current minimum is also maximum in its column
      bool isLuckyNumber = true;

      // Check if the found minimum is the maximum in its column
      for (const auto &checkRow : matrix)
      {
        // If any element in this column is greater than rowMinimum, it's not lucky
        if (checkRow[minColumnIndex] > rowMinimum)
        {
          isLuckyNumber = false;
          break;
        }
      }

      // If the number passes both conditions, add it to result
      if (isLuckyNumber)
        luckyNumbersList.push_back(rowMinimum);
    }

    // Return the list of lucky numbers found
    return luckyNumbersList;
  }
};
