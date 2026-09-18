/**
 * Problem: 1710. Maximum Units on a Truck
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public int MaximumUnits(int[][] boxTypes, int truckSize)
  {
    // Track total units loaded and maximum units per box
    int totalUnits = 0, maxUnits = -1;

    // Find maximum units per box to size frequency array
    for (int boxIndex = 0; boxIndex < boxTypes.Length; boxIndex++)
    {
      if (boxTypes[boxIndex][1] > maxUnits)
        maxUnits = boxTypes[boxIndex][1];
    }

    // Build frequency of box counts by units per box
    int[] unitFrequencies = new int[maxUnits + 1];

    // Accumulate box counts for each units per box value
    for (int boxIndex = 0; boxIndex < boxTypes.Length; boxIndex++)
      unitFrequencies[boxTypes[boxIndex][1]] += boxTypes[boxIndex][0];

    // Take boxes greedily starting from highest unit value
    for (int units = maxUnits; units >= 1; units--)
    {
      // Stop when truck is full
      if (truckSize == 0) break;

      // Take as many boxes of this unit value as fit
      int take = Math.Min(unitFrequencies[units], truckSize);

      // Add units from taken boxes to total
      totalUnits += take * units;
      // Reduce remaining truck capacity
      truckSize -= take;
    }

    // Return the maximum total units loaded on truck
    return totalUnits;
  }
}
