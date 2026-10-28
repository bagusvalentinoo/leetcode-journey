/**
 * Problem: 2027. Minimum Moves to Convert String
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public int MinimumMoves(string s)
  {
    // Store the number of moves needed.
    int moves = 0;

    // Skip the three positions converted by each move.
    for (int i = 0; i < s.Length; i++)
    {
      // Convert the current X and its next two positions.
      if (s[i] == 'X')
      {
        moves++;
        i += 2;
      }
    }

    // Return the minimum number of moves.
    return moves;
  }
}
