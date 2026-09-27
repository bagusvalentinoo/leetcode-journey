/**
 * Problem: 1854. Maximum Population Year
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public int MaximumPopulation(int[][] logs)
  {
    // Base year offset and total year range from 1950 to 2050
    int baseYear = 1950, yearRange = 101;

    // Initialize difference array for range updates
    int[] difference = new int[yearRange];

    // Mark population changes for each person
    foreach (int[] log in logs)
    {
      // Increment count at birth year
      difference[log[0] - baseYear]++;

      // Decrement count at death year (person not counted in death year)
      difference[log[1] - baseYear]--;
    }

    // Track maximum population and earliest year achieving it
    int maxPopulation = 0, earliestYear = baseYear, currentPopulation = 0;

    // Scan years in order computing prefix sums
    for (int index = 0; index < yearRange; index++)
    {
      // Add net change for current year to running population
      currentPopulation += difference[index];

      // Update answer only on strictly greater population to keep earliest year
      if (currentPopulation > maxPopulation)
      {
        // Record new maximum population
        maxPopulation = currentPopulation;

        // Record earliest year reaching this maximum
        earliestYear = baseYear + index;
      }
    }

    // Return the earliest year with maximum population
    return earliestYear;
  }
}
