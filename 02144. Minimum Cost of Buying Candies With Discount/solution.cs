/**
 * Problem: 2144. Minimum Cost of Buying Candies With Discount
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public int MinimumCost(int[] cost)
  {
    // Frequency array for costs 1-100 (index 0 unused)
    Span<int> costFrequency = stackalloc int[101];

    // Count occurrences of each cost value
    foreach (int currentCost in cost)
      costFrequency[currentCost]++;

    // Total sum accumulator
    int totalSum = 0;
    // Counter for free items (every 3rd item is free)
    int freeCounter = 2;

    // Process costs from highest to lowest
    for (int price = 100; price >= 1; price--)
    {
      // Process all items with this cost
      while (costFrequency[price] != 0)
      {
        // Use one item of this cost
        costFrequency[price]--;

        // If free counter is 0, this item is free
        if (freeCounter == 0)
          // Reset counter to 2 for next group
          freeCounter = 2;
        // Otherwise, pay for this item
        else
        {
          // Decrement free counter
          freeCounter--;
          // Add price to total sum
          totalSum += price;
        }
      }
    }

    // Return total cost
    return totalSum;
  }
}
