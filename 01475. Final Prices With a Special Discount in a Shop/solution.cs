/**
 * Problem: 1475. Final Prices With a Special Discount in a Shop
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public int[] FinalPrices(int[] prices)
  {
    // Array to store final prices after discounts
    int[] discountedPrices = new int[prices.Length];

    // Calculate discounted price for each item
    for (int i = 0; i < prices.Length; i++)
    {
      // Store original price of current item
      int originalPrice = prices[i];

      // Apply discount by subtracting the first smaller or equal price found
      discountedPrices[i] = prices[i] - GetDiscount(i, prices);
    }

    // Return the array of discounted prices
    return discountedPrices;
  }

  // Helper method to find the first smaller or equal price after current index
  private int GetDiscount(int currentIndex, int[] prices)
  {
    // Check all subsequent items for a smaller or equal price
    for (int j = currentIndex + 1; j < prices.Length; j++)
    {
      // If we find a price that is less than or equal to current price
      if (prices[j] <= prices[currentIndex])
        return prices[j]; // Return the discount amount
    }

    // No discount found, return 0
    return 0;
  }
}
