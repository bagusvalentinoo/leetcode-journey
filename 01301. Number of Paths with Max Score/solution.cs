/**
 * Problem: 1301. Number of Paths with Max Score
 *
 * Difficulty: Hard
 *
 * Language: C#
 *
 * Performance: Runtime - 120 ms (Beats 100%)
 */

public class Solution
{
  public int[] PathsWithMaxScore(IList<string> board)
  {
    // Modulo constant for results
    const int MOD = 1000000007;

    // Get grid size
    int size = board.Count;

    // DP arrays for maximum score and number of paths
    int[][] maxScore = new int[size][];
    int[][] pathCount = new int[size][];

    for (int i = 0; i < size; i++)
    {
      maxScore[i] = new int[size];
      pathCount[i] = new int[size];
    }

    // Starting position (bottom-right) has one path
    pathCount[size - 1][size - 1] = 1;

    // Process grid from bottom-right to top-left
    for (int row = size - 1; row >= 0; row--)
    {
      for (int col = size - 1; col >= 0; col--)
      {
        // Skip obstacles or cells with no paths to them
        if (board[row][col] != 'X' && pathCount[row][col] != 0)
        {
          // Check three possible previous directions: up, left, and up-left
          int[][] directions = new int[][]
          {
            new int[] { 1, 0 },
            new int[] { 0, 1 },
            new int[] { 1, 1 },
          };

          foreach (var dir in directions)
          {
            int dx = dir[0];
            int dy = dir[1];

            // Calculate previous row and column
            int prevRow = row - dx;
            int prevCol = col - dy;

            // Check if previous cell is within bounds and not an obstacle
            if (prevRow >= 0 && prevCol >= 0 && board[prevRow][prevCol] != 'X')
            {
              // Get score of previous cell (0 for 'E' cell)
              int cellScore = board[prevRow][prevCol] == 'E' ? 0 : (board[prevRow][prevCol] - '0');

              // Calculate new total score
              int newScore = (maxScore[row][col] + cellScore) % MOD;

              // Update if new score is better
              if (newScore > maxScore[prevRow][prevCol])
              {
                maxScore[prevRow][prevCol] = newScore;
                pathCount[prevRow][prevCol] = pathCount[row][col];
              }
              // If equal score, add path counts
              else if (newScore == maxScore[prevRow][prevCol])
              {
                pathCount[prevRow][prevCol] =
                  (pathCount[prevRow][prevCol] + pathCount[row][col]) % MOD;
              }
            }
          }
        }
      }
    }

    // Return max score and path count at top-left
    return new int[] { maxScore[0][0], pathCount[0][0] };
  }
}
