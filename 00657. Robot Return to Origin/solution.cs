/**
 * Problem: 657. Robot Return to Origin
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 3 ms (Beats 100%)
 */

public class Solution
{
  public bool JudgeCircle(string moves)
  {
    // Initialize vertical (x) and horizontal (y) coordinates
    int x = 0,
      y = 0;

    // Loop through each character in the moves string
    foreach (char move in moves)
    {
      // If move is 'U', move up (increase x coordinate)
      if (move == 'U')
        x++;
      // If move is 'D', move down (decrease x coordinate)
      else if (move == 'D')
        x--;
      // If move is 'R', move right (increase y coordinate)
      else if (move == 'R')
        y++;
      // If move is 'L', move left (decrease y coordinate)
      else if (move == 'L')
        y--;
    }

    // If both coordinates are zero, robot returned to origin
    if (x == 0 && y == 0)
      return true;

    // Otherwise, robot did not return to origin
    return false;
  }
}
