/**
 * Problem: 1640. Check Array Formation Through Concatenation
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public bool CanFormArray(int[] arr, int[][] pieces)
  {
    // Map first element of each piece to the piece itself
    Dictionary<int, int[]> pieceMap = new Dictionary<int, int[]>();

    // Populate map using first value as key since all integers are distinct
    foreach (int[] piece in pieces) pieceMap[piece[0]] = piece;

    // Track current position in arr
    int index = 0;

    // Walk through arr matching whole pieces
    while (index < arr.Length)
    {
      // Look up the piece that must start at current position
      if (!pieceMap.TryGetValue(arr[index], out int[] piece)) return false;

      // Verify every element of the piece matches arr in order
      foreach (int value in piece)
      {
        // Mismatch means pieces cannot form arr
        if (value != arr[index]) return false;

        // Advance to next position in arr
        index++;
      }
    }

    // All positions matched whole pieces
    return true;
  }
}
