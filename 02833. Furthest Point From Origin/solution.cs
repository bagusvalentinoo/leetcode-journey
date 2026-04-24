/**
 * Problem: 2833. Furthest Point From Origin
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public int FurthestDistanceFromOrigin(string moves)
  {
    // Counters for left moves, right moves, and blank moves
    int leftCount = 0,
      rightCount = 0,
      blankCount = 0;

    // Iterate through each character in the moves string
    foreach (char moveChar in moves)
    {
      // Increment left counter for 'L'
      if (moveChar == 'L')
        leftCount++;
      // Increment right counter for 'R'
      else if (moveChar == 'R')
        rightCount++;
      // Increment blank counter for '_'
      else
        blankCount++;
    }

    // Maximum distance = absolute difference between left and right, plus all blanks
    return Math.Abs(leftCount - rightCount) + blankCount;
  }
}
