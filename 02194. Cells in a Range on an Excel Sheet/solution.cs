/**
 * Problem: 2194. Cells in a Range on an Excel Sheet
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public IList<string> CellsInRange(string s)
  {
    // Allocate the result list for every cell in the range
    var cells = new List<string>((s[3] - s[0] + 1) * (s[4] - s[1] + 1));

    // Visit each column in the range
    for (char column = s[0]; column <= s[3]; column++)
    {
      // Visit each row in the current column
      for (char row = s[1]; row <= s[4]; row++)
        // Add the current cell to the result
        cells.Add(new string(new[] { column, row }));
    }

    // Return all cells in the required order
    return cells;
  }
}
