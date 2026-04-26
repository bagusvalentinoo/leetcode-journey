/**
 * Problem: 1560. Most Visited Sector in a Circular Track
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public IList<int> MostVisited(int n, int[] rounds)
  {
    // Get the starting sector of the first round
    int startSector = rounds[0];

    // Get the ending sector of the last round
    int endSector = rounds[rounds.Length - 1];

    // List to store the most visited sectors
    List<int> visitedSectors = new List<int>();

    // Check each sector from 1 to n
    for (int sector = 1; sector <= n; sector++)
    {
      // Condition 1: No wrap around (start ≤ end) and sector is between start and end
      // Condition 2: Wrap around (start > end) and sector is either ≥ start or ≤ end
      if (
        (sector >= startSector && sector <= endSector && startSector <= endSector)
        || (startSector > endSector && (sector >= startSector || sector <= endSector))
      )
        // Add sector to result if it's in the visited range
        visitedSectors.Add(sector);
    }

    // Return the list of most visited sectors
    return visitedSectors;
  }
}
