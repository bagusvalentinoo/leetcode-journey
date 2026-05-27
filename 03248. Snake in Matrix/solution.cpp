/**
 * Problem: 3248. Snake in Matrix
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
  int finalPositionOfSnake(int n, vector<string> &commands)
  {
    // Initialize snake's starting position at top-left corner (row 0, col 0)
    int row = 0, col = 0;

    // Process each command in sequence
    for (int i = 0; i < commands.size(); i++)
    {
      // Move up: decrease row index
      if (commands[i] == "UP")
        row--;
      // Move right: increase column index
      else if (commands[i] == "RIGHT")
        col++;
      // Move down: increase row index
      else if (commands[i] == "DOWN")
        row++;
      // Move left: decrease column index
      else if (commands[i] == "LEFT")
        col--;
    }

    // Convert (row, col) to linear index: row * n + col
    return row * n + col;
  }
};
