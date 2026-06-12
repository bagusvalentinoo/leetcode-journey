/**
 * Problem: 1431. Kids With the Greatest Number of Candies
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public IList<bool> KidsWithCandies(int[] candies, int extraCandies)
  {
    // Variable to store the maximum candy count among all kids
    int maxCandyCount = 0;

    // Find the maximum candy count in the array
    foreach (int candyAmount in candies)
      maxCandyCount = Math.Max(maxCandyCount, candyAmount);

    // List to store boolean results
    List<bool> resultList = new();

    // Check each kid to see if they can have the most candies after adding extra
    foreach (int candyAmount in candies)
    {
      // If current kid's candies plus extras reaches or exceeds max, they can have the most
      if (candyAmount + extraCandies >= maxCandyCount)
        resultList.Add(true);
      // Otherwise, they cannot have the most
      else
        resultList.Add(false);
    }

    // Return the list of results
    return resultList;
  }
}
