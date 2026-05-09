/**
 * Problem: 3477. Fruits Into Baskets II
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public int NumOfUnplacedFruits(int[] fruits, int[] baskets)
  {
    // Initialize a counter for unplaced fruits
    int unplaced = 0;

    // Iterate over each fruit in the fruits array
    for (int i = 0; i < fruits.Length; i++)
    {
      // Flag to check if the current fruit is placed in any basket
      bool isPlaced = false;

      // Iterate over each basket to try to place the current fruit
      for (int j = 0; j < baskets.Length; j++)
      {
        // Check if the current basket can hold the current fruit
        if (fruits[i] <= baskets[j])
        {
          // Mark the basket as used by setting its size to -1
          baskets[j] = -1;
          // Set the flag to true since the fruit is placed
          isPlaced = true;

          // Exit the basket loop since the fruit is placed
          break;
        }
      }

      // If the fruit was not placed in any basket, increment the unplaced counter
      if (!isPlaced)
        unplaced++;
    }

    // Return the total number of unplaced fruits
    return unplaced;
  }
}
