/**
 * Problem: 1301. Number of Paths with Max Score
 *
 * Difficulty: Hard
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  // Modulo constant for results
  const int MOD = 1e9 + 7;

  // Possible move directions: right, down, and diagonal
  vector<pair<int, int>> directions = {{0, 1}, {1, 0}, {1, 1}};

  vector<int> pathsWithMaxScore(vector<string> &board) {
    // Get grid size
    int size = board.size();

    // DP arrays for maximum score and number of paths
    vector<vector<int>> maxScore(size, vector<int>(size, -1));
    vector<vector<int>> pathCount(size, vector<int>(size, 0));

    // Initialize bottom-right cell
    maxScore[size - 1][size - 1] = 0;
    pathCount[size - 1][size - 1] = 1;

    // Process grid from bottom-right to top-left
    for (int row = size - 1; row >= 0; row--) {
      for (int col = size - 1; col >= 0; col--) {
        // Skip obstacles
        if (board[row][col] == 'X')
          continue;
        // Skip starting position
        if (row == size - 1 && col == size - 1)
          continue;

        // Find best path to current cell
        int bestScore = -1;
        int totalWays = 0;

        // Check all possible previous positions
        for (auto [dx, dy] : directions) {
          int prevRow = row + dx;
          int prevCol = col + dy;

          // Skip if out of bounds or unreachable
          if (prevRow >= size || prevCol >= size)
            continue;
          if (maxScore[prevRow][prevCol] < 0)
            continue;

          // Update best score and path count
          if (maxScore[prevRow][prevCol] > bestScore) {
            bestScore = maxScore[prevRow][prevCol];
            totalWays = pathCount[prevRow][prevCol];
          } else if (maxScore[prevRow][prevCol] == bestScore) {
            totalWays = (totalWays + pathCount[prevRow][prevCol]) % MOD;
          }
        }

        // Skip if no valid path found
        if (bestScore < 0)
          continue;

        // Calculate score for current cell
        int cellScore = board[row][col] == 'E' ? 0 : (board[row][col] - '0');

        // Update DP values
        maxScore[row][col] = bestScore + cellScore;
        pathCount[row][col] = totalWays;
      }
    }

    // Return result based on reachability
    if (pathCount[0][0] == 0)
      return {0, 0};

    // Return max score and path count at top-left
    return {maxScore[0][0], pathCount[0][0]};
  }
};
